import Expense from "../models/expense.js";

export const getExpense = async (req, res) => {
    const expenses = await Expense.find();

    res.status(200).json({
        expenses,
    });
};

export const updateExpense = async (req, res) => {
    let expense = await Expense.findById(req?.params?.id);

    if (!expense) {
        return res.status(404).json({
            error: "Expense not found",
        });
    }

    expense = await Expense.findByIdAndUpdate(
        req?.params?.id,
        { $set: req.body },
        {
            new: true,
        }
    );

    res.status(200).json({
        expense,
    });
};

export const getOneExpense = async (req, res) => {
    const expense = await Expense.findById(req?.params?.id);

    if (!expense) {
        return res.status(404).json({
            error: "Expense not found",
        });
    }

    res.status(200).json({
        expense,
    });
};

export const deleteExpense = async (req, res) => {
    let expense = await Expense.findById(req?.params?.id);

    if (!expense) {
        return res.status(404).json({
            error: "Expense not found",
        });
    }

    await expense.deleteOne();

    res.status(200).json({
        message: "Expense deleted",
    });
};

export const newExpense = async (req, res) => {
    const expense = await Expense.create(req.body);
    res.status(200).json({
        expense,
    });
};
