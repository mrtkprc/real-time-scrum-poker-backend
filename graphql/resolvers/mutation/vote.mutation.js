module.exports = {
    addVote: async (parent, {data: {vote, participantId, sessionId}}, {Vote, pubSub}) => {
        const voteGiven = await Vote.findOneAndUpdate({participantId, sessionId},{$set:{vote}},{upsert: true, new: true});

        await pubSub.publish('voteGiven',{
            voteGiven
        });

        return voteGiven;
    }
};
