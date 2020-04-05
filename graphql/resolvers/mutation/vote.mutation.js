module.exports = {
    addVote: async (parent, {data: {vote, participantId}}, {Vote, pubSub}) => {
        const VoteResult = await Vote.findOneAndUpdate({participantId},{$set:{vote}},{upsert: true, new: true});
        return VoteResult;
    }
};
