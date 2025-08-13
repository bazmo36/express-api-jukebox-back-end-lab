const { Schema, model } = require('mongoose')

const trackSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  }
})

const Track = model('Track',trackSchema)


module.exports = Track