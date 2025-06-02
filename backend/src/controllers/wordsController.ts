import { Request, Response } from "express";
import { readSearchHistory, writeSearchHistory } from "../utils/fileHandler";

export const saveWord = (req: Request, res: Response) => {
  const { word } = req.body;

  if (!word || typeof word !== "string") {
    res.status(400).json({ error: "Invalid word" });
    return;
  }

  const history = readSearchHistory();

  if (!history.includes(word)) {
    history.push(word);
    writeSearchHistory(history);
  }

  res.status(200).json({ message: "Word saved successfully" });
};
