module.exports = {
    addVote: async (parent, {data: {vote, participantId, sessionId}}, {Vote, pubSub}) => {
        const VoteResult = await Vote.findOneAndUpdate({participantId},{$set:{vote}},{upsert: true, new: true});

        const publishedData = {
            id: VoteResult.id,
            vote: VoteResult.vote,
            participantId: VoteResult.participantId,
            sessionId
        };

        await pubSub.publish('voteGiven',{
            voteGiven: publishedData
        });

        return VoteResult;
    }
};
