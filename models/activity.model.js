const mongoose = require("mongoose");
const schema = mongoose.Schema;

const activitySchema = schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  city: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: Number, default: 0 },
  address: { type: String },
  longitude: { type: Number },
  latitude: { type: Number }
});

module.exports = activitySchema;
