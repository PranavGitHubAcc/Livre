import fs from "fs";
import csv from "csv-parser";
import path from "path";
import { fileURLToPath } from "url";
import { log } from "console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readExchangeRates = () => {
    return new Promise((resolve, reject) => {
        const rates = {};
        fs.createReadStream(
            path.join(
                __dirname,
                "..",
                "currentExchangeRates",
                "exchange_rates.csv"
            )
        )
            .pipe(csv())
            .on("data", (row) => {
                rates[row.currency] = parseFloat(row.value);
            })
            .on("end", () => {
                resolve(rates);
            })
            .on("error", (error) => {
                reject(error);
            });
    });
};

export const convertCurrency = async (from, to, amount) => {
    const rates = await readExchangeRates();

    if (!rates[from] || !rates[to]) {
        throw new Error("Invalid currency");
    }

    const eurAmount = amount / rates[from];
    const convertedAmount = eurAmount * rates[to];
    return Number(convertedAmount.toFixed(2));
};
