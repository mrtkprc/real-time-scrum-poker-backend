const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const voteSchema = new Schema({
    vote: String,
    isGiven: {
        type: Schema.Types.Number,
        default: 1
    },
    participantId: {
        type: Schema.Types.ObjectId,
        ref: 'Participant'
    },
    sessionId: {
        type: Schema.Types.ObjectId,
        ref: 'Session'
    }
});

module.exports = mongoose.model('Vote', voteSchema);
