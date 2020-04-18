const session = require('./session.subscription');
const vote = require('./vote.subscription');

const Subscription = {
	...session,
	...vote
};

module.exports = Subscription;
