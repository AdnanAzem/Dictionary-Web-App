import express from "express";
import { saveWord, getTopWords } from "../controllers/wordsController";

const router = express.Router();

router.post("/save", saveWord);
router.get('/top', getTopWords);

export default router;