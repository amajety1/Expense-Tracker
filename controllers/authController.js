const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
    try{
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
} catch (error) {
    res.status(500).json({ error:error.message }); 
}
};

exports.login = async (req, res) => {
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
        res.status(200).json({token});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

