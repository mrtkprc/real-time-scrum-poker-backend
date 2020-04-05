const participant = require('./participant.mutation');
const session = require('./session.mutation');
const vote = require('./vote.mutation');

const Mutation = {
	...participant,
    ...session,
    ...vote
};

module.exports = Mutation;
