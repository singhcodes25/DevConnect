const Developer = require("../models/developer.model");

const checkIfDeveloper = async (req, res) => {
    try {
        const { userId } = req.params;
        const developer = await Developer.findOne({ userId });
        res.json({ isDeveloper: !!developer });
    } catch (error) {
        console.error("Error checking if user is a developer:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { checkIfDeveloper };
