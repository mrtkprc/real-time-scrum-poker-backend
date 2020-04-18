module.exports = {
    addVote: async (parent, {data: {vote, participantId, sessionId}}, {Vote, pubSub}) => {
        const voteGiven = await Vote.findOneAndUpdate({participantId, sessionId},{$set:{vote, isGiven: 1}},{upsert: true, new: true});

        await pubSub.publish('voteGiven',{
            voteGiven
        });

        return voteGiven;
    },
    deleteAllVotesOnSession: async (parent, {sessionId}, {Vote, pubSub}) => {
        const deleteVotes = await Vote.deleteMany({sessionId});

        await pubSub.publish('allVotesDeleted', {
            sessionId,
            allVotesDeleted: String(deleteVotes.deletedCount)
        })

        return String(deleteVotes.deletedCount);
    }
};
