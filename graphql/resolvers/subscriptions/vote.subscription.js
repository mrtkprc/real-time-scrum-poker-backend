const {withFilter} = require('apollo-server');

module.exports = {
    allVotesDeleted:{
        subscribe: withFilter((parent, args, {pubSub}) => {
                return pubSub.asyncIterator('allVotesDeleted');
            },
            (payload, variables) => {
                return variables.sessionId ? String(payload.sessionId) === variables.sessionId.toString() : false;
            }
        )
    }

}
