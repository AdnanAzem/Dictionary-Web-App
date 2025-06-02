import { Request, Response } from "express";
import { readSearchHistory, writeSearchHistory } from "../utils/fileHandler";
import db from "../db/knex";

export const saveWord = async (req: Request, res: Response) => {
  const { word } = req.body;

  if (!word || typeof word !== "string") {
    res.status(400).json({ message: "Invalid word" });
    return;
  }

  const history = readSearchHistory();

  if (!history.includes(word)) {
    history.push(word);
    writeSearchHistory(history);
  }

  try {
    const existing = await db("word_stats").where({ word }).first();

    if (existing) {
      await db("word_stats").where({ word }).increment("count", 1);
    } else {
      await db("word_stats").insert({ word, count: 1 });
    }

    res.status(200).json({ message: "Word saved successfully" });
  } catch (error) {
    console.error("DB error:", error);
    res.status(500).json({ message: "Database error" });
  }
};

export const getTopWords = async (req: Request, res: Response) => {
    try {
        const topWords = await db('word_stats')
        .select('word', 'count')
        .orderBy('count', 'desc')
        .limit(10);

        res.status(200).json(topWords);
    } catch (error) {
        console.error("DB error:", error);
        res.status(500).json({ message: "Database error" });
    }
};
