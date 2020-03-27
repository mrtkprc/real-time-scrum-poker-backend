module.exports = {
    newParticipantArrived: {
        subscribe: (parent, args, {pubSub}) => {
            return pubSub.asyncIterator('newParticipantArrived');
        }
    }
};
