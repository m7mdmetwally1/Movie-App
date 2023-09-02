import mongoose from 'mongoose'

const favoriteSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    movie: {
        type: mongoose.Types.ObjectId,
        ref: 'movie'
    },
    added_Date: {
        type: Date
    }
})

export const favoriteModel = mongoose.model('favorite', favoriteSchema)