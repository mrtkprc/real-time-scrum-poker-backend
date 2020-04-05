const Vote ={
    participant: (parent, args, {Participant}) => {
        return Participant.findById(parent.participantId);
    },
    session: (parent, args, {Session}) => {
        return Session.findById(parent.sessionId);
    }
};

module.exports = Vote;
