const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


async function signup(req, res) {
    const { name, email, password } = req.body;

    const userexit = await User.findOne({ $or: [{ email }, { name }] });
    if (userexit) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hash });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

    res.cookie('token', token, { httpOnly: true, maxAge: 1000 * 60 * 10 * 60, sameSite: 'lax' })

    res.status(201).json({
        message: 'User registered successfully', 
        userId: user._id,
        name: user.name,
        email: user.email
    });
}

async function login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    res.cookie('token', token, { httpOnly: true, maxAge: 1000 * 60 * 10 * 60, sameSite: 'lax' });
    res.status(200).json({
        message: 'User logged in successfully', 
        userId: user._id, 
        name: user.name,
        email: user.email
    });
}

async function logout(req, res) {
    res.clearCookie('token', { httpOnly: true, sameSite: 'lax' });

    res.status(200).json({ message: "User logged out successfully" })
}

module.exports = { signup, login, logout }