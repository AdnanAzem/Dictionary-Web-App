import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "../data/search-history.json");

export const readSearchHistory = (): string[] => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.log("Error reading search history: ", error);
    return [];
  }
};

export const writeSearchHistory = (words: string[]) => {
    try{
        fs.writeFileSync(filePath, JSON.stringify(words, null, 2), "utf-8");
    } catch (error) {
        console.log("Error writing search history: ", error);
    }
};
