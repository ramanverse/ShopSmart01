const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userBlueprint = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Gotta know what to call them."],
    trim: true
  },
  email: {
    type: String,
    required: [true, "We need an email so we can bug them later... kidding."],
    unique: true,
    lowercase: true,
    trim: true
  },
  hashedPassword: {
    type: String,
    required: true,
    // Note to self: NEVER return this in standard queries.
    select: false 
  },
  role: {
    type: String,
    enum: ['customer', 'admin', 'super_admin_guy'],
    default: 'customer'
  },
  savedAddresses: [{
    street: String,
    city: String,
    zipCode: String,
    isDefault: { type: Boolean, default: false }
  }]
}, {
  timestamps: true // Let Mongoose handle the created/updated mess automatically
});

userBlueprint.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.hashedPassword);
};

// Hash the password right before throwing it into the db
userBlueprint.pre('save', async function(next) {
  if (!this.isModified('hashedPassword')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.hashedPassword = await bcrypt.hash(this.hashedPassword, salt);
});

const UserModel = mongoose.model('User', userBlueprint);

module.exports = UserModel;
