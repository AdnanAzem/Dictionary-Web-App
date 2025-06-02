import express from "express";
import { saveWord } from "../controllers/wordsController";

const router = express.Router();

router.post("/save", saveWord);

export default router;