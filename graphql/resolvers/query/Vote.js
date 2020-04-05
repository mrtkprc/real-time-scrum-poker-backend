const Vote ={
    participant: (parent, args, {Participant}) => {
        return Participant.findById(parent.participantId);

    }
};

module.exports = Vote;
