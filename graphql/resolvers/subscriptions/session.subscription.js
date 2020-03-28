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
    }
};



