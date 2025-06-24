const mongoose = require('mongoose');

const AvailabilitySchema = new mongoose.Schema({
  available: { type: Boolean, default: false },
  times: [String], // e.g., ["9:00 AM to 10:00 AM"]
});

const UserProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  firstName: String,
  lastName: String,
  dateOfBirth: String,
  bio: String,
  location: String,
  useGPS: Boolean,
  profilePhoto: String, // Optional URL or base64 string
  skillsToTeach: [String],
  skillsToLearn: [String],
  availability: {
    monday: AvailabilitySchema,
    tuesday: AvailabilitySchema,
    wednesday: AvailabilitySchema,
    thursday: AvailabilitySchema,
    friday: AvailabilitySchema,
    saturday: AvailabilitySchema,
    sunday: AvailabilitySchema,
  }
}, { timestamps: true });

module.exports = mongoose.model('UserProfile', UserProfileSchema);
