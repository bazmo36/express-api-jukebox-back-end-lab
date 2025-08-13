const express = require('express')
const router = express.Router()
const trackController = require('../controllers/track')


router.post('/',trackController.createTrack)
router.get('/',trackController.trackIndex)
router.get('/:id',trackController.showTrack)
router.put('/:id',trackController.updatedTrack)
router.delete('/:id',trackController.deleteTrack)

module.exports = router