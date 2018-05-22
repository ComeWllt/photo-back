const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Location = require('./location');

const locationSchema = mongoose.model(Location.modelName).schema;

const albumSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  author: {
    type: String,
    required: true,
  },
  albumCover: {
    type: String,
    required: true
  },
  location: 
    locationSchema
  ,
  photos:{
    type: Array
  },
  description: {
    type: String
  },
},{
  timestamps: true
});


const Albums = mongoose.model('Album', albumSchema);

module.exports = Albums;