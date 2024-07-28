import { translate } from "@vitalets/google-translate-api";

export const translateText = async (req, res) => {
    const { text, targetLang } = req.body;
    try {
        const { text: translatedText } = await translate(text, {
            to: targetLang,
        });
        res.status(200).json({
            message: "Translated text",
            translatedText,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error translating text",
            error: error.message,
        });
    }
};
