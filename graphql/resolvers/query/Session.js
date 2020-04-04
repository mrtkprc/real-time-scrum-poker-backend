const Session = {
    participants: (parent, args, { Participant }) => {
        return Participant.find({sessionId: parent._id}).sort({_id: -1});
    }
};

module.exports = Session;
