import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter a title for the expense."],
            maxLength: [50, "Title cannot exceed 50 characters."],
        },
        cost: {
            type: Number,
            required: [true, "Please enter the expense amount."],
        },
        isWithdrawn: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Expense", expenseSchema);
