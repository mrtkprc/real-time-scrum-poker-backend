const {withFilter} = require('apollo-server');

module.exports = {
    newParticipantArrived: {
        subscribe: withFilter((parent, args, {pubSub}) => {
                return pubSub.asyncIterator('newParticipantArrived');
            },
            (payload, variables) => {
                return variables.sessionId ? String(payload.newParticipantArrived.sessionId) === variables.sessionId.toString() : false;
            }
        )
    },
    voteGiven: {
        subscribe: withFilter((parent, args, {pubSub}) => {
                return pubSub.asyncIterator('voteGiven');
            },
            (payload, variables) => {
                return variables.sessionId ? String(payload.voteGiven.sessionId) === variables.sessionId.toString() : false;
            }
        )
    },
    forwardTeamToDefiniteScreenSubscription: {
        subscribe: withFilter((parent, args, {pubSub}) => {
                return pubSub.asyncIterator('forwardTeamToDefiniteScreenSubscription');
            },
            (payload, variables) => {
                return variables.sessionId ? String(payload.sessionId) === variables.sessionId.toString() : false;
            }
        )
    }
};



