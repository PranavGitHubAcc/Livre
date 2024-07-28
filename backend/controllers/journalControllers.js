import Journal from "../models/journal.js";

export const getJournals = async (req, res) => {
    const journals = await Journal.find();

    res.status(200).json({
        journals,
    });
};

export const getOneJournal = async (req, res) => {
    const journal = await Journal.findById(req?.params?.id);

    if (!journal) {
        return res.status(404).json({
            error: "Journal not found",
        });
    }

    res.status(200).json({
        journal,
    });
};

export const updateJournal = async (req, res) => {
    let journal = await Journal.findById(req?.params?.id);

    if (!journal) {
        return res.status(404).json({
            error: "Journal not found",
        });
    }

    journal = await Journal.findByIdAndUpdate(
        req?.params?.id,
        { $set: req.body },
        {
            new: true,
        }
    );

    res.status(200).json({
        journal,
    });
};

export const deleteJournal = async (req, res) => {
    let journal = await Journal.findById(req?.params?.id);

    if (!journal) {
        return res.status(404).json({
            error: "Journal not found",
        });
    }

    await journal.deleteOne();

    res.status(200).json({
        message: "Journal deleted",
    });
};

export const newJournalEntry = async (req, res) => {
    const journal = await Journal.create(req.body);

    res.status(200).json({
        journal,
    });
};
