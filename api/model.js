const mongoose = require('mongoose')

const FairyTaleSchema = new mongoose.Schema({
  id: Number,
  name: String
});



module.exports = mongoose.model('fairyTale', FairyTaleSchema);
