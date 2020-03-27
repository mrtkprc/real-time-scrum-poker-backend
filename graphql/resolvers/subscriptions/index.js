const participant = require('./participant.subscription');
const session = require('./session.subscription');

const Subscription = {
	...participant,
	...session
};

module.exports = Subscription;
