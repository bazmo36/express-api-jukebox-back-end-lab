const Track = require('../models/Track')



const createTrack = async (req, res)=>{
    console.log('You are create track controller')
      try {
        const createdTrack = await Track.create(req.body)
        res.status(201).json(createdTrack)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}


const trackIndex = (async(req, res)=> {
     try {
        const allTracks = await Track.find()
        res.status(200).json(allTracks)
    } catch (err) {
        console.log(err)
    }
})

const showTrack = (async(req, res)=> {
    try {
        const track = await Track.findById(req.params.id)
        if (track) {
            res.status(200).json(track)
        } else {
            res.sendStatus(404)
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


const deleteTrack = (async(req, res) => {
    try {
        const track = await Track.findByIdAndDelete(req.params.id)
        if (track) {
            res.status(200).json(track)
        } else {
            res.sendStatus(404)
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

const updatedTrack = (async(req,res)=> {
    try {
        const track = await Track.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )

        if (track) {
            res.status(200).json(track)
        } else {
            res.sendStatus(404)
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }

})



module.exports = {
    createTrack,
    trackIndex,
    showTrack,
    deleteTrack,
    updatedTrack
}
