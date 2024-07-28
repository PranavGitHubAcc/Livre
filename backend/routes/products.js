import express from "express";
import {
    getJournals,
    newJournalEntry,
    getOneJournal,
    updateJournal,
    deleteJournal,
} from "../controllers/journalControllers.js";
import { moneyTranslate } from "../controllers/moneyTranslator.js";
import { translateText } from "../controllers/translate.js";

const router = express.Router();
router.route("/translate").post(translateText);
router.route("/currencyTranslate").post(moneyTranslate);
router.route("/journal").post(newJournalEntry);
router.route("/journal").get(getJournals);
router.route("/journal/:id").get(getOneJournal);
router.route("/journal/:id").put(updateJournal);
router.route("/journal/:id").delete(deleteJournal);

export default router;
