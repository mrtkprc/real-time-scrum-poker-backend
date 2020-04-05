const Session = {
    participants: (parent, args, { Participant }) => {
        return Participant.find({sessionId: parent._id}).sort({_id: -1});
    },
    votes: (parent, args, { Vote }) => {
        return Vote.find({sessionId: parent._id});
    }
};

module.exports = Session;
