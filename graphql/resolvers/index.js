// query resolvers
const Query = require('./query/Query');
const Participant = require('./query/Participant');
const Session = require('./query/Session');

// mutation resolvers
const Mutation = require('./mutation/index');

// Subscription resolvers

const Subscription = require('./subscriptions/index');

module.exports = {
	Query,
	Mutation,
	Participant,
	Session,
	Subscription
};
