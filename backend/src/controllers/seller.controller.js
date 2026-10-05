const Seller = require('../models/seller.model');
const User = require('../models/user.model');

async function applyToBeSeller(req, res) {
    try {
        const { name, skills, role, bio } = req.body;

        if (!name || !skills || !role || !bio) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: 'User not found. Please register first.'
            });
        }


        const seller = new Seller({
            userId: user._id,
            name,
            skills,
            role,
            bio
        });

        await seller.save();

        res.status(201).json({
            message: 'Seller application submitted successfully.',
            sellerId: seller._id,
            name: seller.name,
            skills: seller.skills,
            role: seller.role,
            bio: seller.bio
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = { applyToBeSeller };