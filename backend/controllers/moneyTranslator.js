import { convertCurrency } from "../helper/readCsv.js";

export const moneyTranslate = async (req, res) => {
    const { from, to, amount } = req.body;
    try {
        const convertedValue = await convertCurrency(from, to, amount);
        res.status(200).json({
            from,
            to,
            amount,
            convertedValue,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
