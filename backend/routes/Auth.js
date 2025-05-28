import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

const router = express.Router();

// Existing register route here...

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // At this point, login is successful
    // For now, just respond success (you can later add JWT token)
    res.json({ msg: 'Login successful', userId: user._id, email: user.email });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

export default router;
