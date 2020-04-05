const Participant = {
    session: (parent, args, { Session }) => {
        return Session.findById(parent.sessionId);
    },
    vote : (parent, args, { Vote }) => {
        return Vote.findOne( {participantId: parent._id});
    }
};

module.exports = Participant;
