const { Song } = require('../models')

module.exports = {
  async index(req, res) {
    try {
      const songs = await Song.findAll({
        limt: 10
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying fecth the songs'
      })
    }
  },
  async post(req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the song'
      })
    }
  }
}