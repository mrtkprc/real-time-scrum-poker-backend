module.exports = {
    createSession: async (parent, {data: {sessionNumber, description}}, {Session}) => {
        try{
            return await Session({
                sessionNumber,
                description
            }).save();
        }catch (e) {
            throw new Error(e);
        }
    },
    forwardTeamToResultScreen: async (parent, {sessionId, delayDuration}, {pubSub}) => {
        await pubSub.publish('forwardTeamToResults', {
            sessionId,
            delayDuration,
            forwardTeamToResults: String(delayDuration)
        })

        return String(delayDuration);
    }
};
