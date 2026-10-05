const mongoose =require("mongoose")

const sellerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    role:{
        type: String,
        required: true,
    }
});
module.exports = mongoose.model("Seller", sellerSchema);