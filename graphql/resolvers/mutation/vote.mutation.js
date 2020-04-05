module.exports = {
    addVote: async (parent, {data: {vote, participantId}}, {Vote, pubSub}) => {
        const VoteResult = await new Vote({
            vote,
            participantId
        }).save();

        return VoteResult;
    }
};
