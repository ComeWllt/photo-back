const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const potfolioSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true,
  },
  photos:{
    type: Array
  },
  description: {
    type: String
  },
},{
  timestamps: true
});


const Portfolios = mongoose.model('Portfolio', potfolioSchema);

module.exports = Portfolios;