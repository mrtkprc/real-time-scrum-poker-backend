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
    forwardTeamToDefiniteScreen: async (parent, {sessionId, screenName, delayDuration}, {pubSub}) => {
        await pubSub.publish('forwardTeamToDefiniteScreenSubscription', {
            sessionId,
            delayDuration,
            screenName,
            forwardTeamToDefiniteScreenSubscription: JSON.stringify({delayDuration,screenName})
        })

        return JSON.stringify({delayDuration,screenName});
    }
};
