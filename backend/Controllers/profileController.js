const UserProfile = require('../models/UserProfile');

exports.createOrUpdateProfile = async (req, res) => {
  try {
    console.log("🔐 req.user:", req.user);            // Debug auth
    console.log("📦 req.body:", req.body);            // Debug incoming data

    if (!req.user || !req.user._id) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const userId = req.user._id;
    const profileData = req.body;

    if (!profileData.firstName || !profileData.lastName) {
      return res.status(400).json({ error: 'First and last name are required.' });
    }

    const updated = await UserProfile.findOneAndUpdate(
      { userId },
      { ...profileData, userId },
      { new: true, upsert: true }
    );

    console.log("✅ Profile saved successfully:", updated);
    res.status(200).json(updated);

  } catch (error) {
    console.error("❌ Profile save error:", error);
    res.status(500).json({ error: error.message || 'Server error while saving profile.' });
  }
};


exports.getProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const profile = await UserProfile.findOne({ userId });

    if (!profile) return res.status(404).json({ message: 'Profile not found' });

    res.status(200).json(profile);
  } catch (error) {
    console.error('Fetch profile error:', error);
    res.status(500).json({ error: 'Server error fetching profile.' });
  }
};
