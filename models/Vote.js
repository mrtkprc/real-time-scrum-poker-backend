const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const voteSchema = new Schema({
    vote: String,
    participantId: {
        type: Schema.Types.ObjectId,
        ref: 'Participant'
    }

});

module.exports = mongoose.model('Vote', voteSchema);
