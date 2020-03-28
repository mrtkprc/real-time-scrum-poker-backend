const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const participantSchema = new Schema({
    nickname: String,
    sessionId: {
        type: Schema.Types.ObjectId,
        ref: 'Session'
    }
});

module.exports = mongoose.model('Participant', participantSchema);
