const http = require('http');
require('dotenv').config();
const express = require('express');
const { ApolloServer} = require('apollo-server-express');
const {pubSub} = require('./pubsub');

const { importSchema } =  require('graphql-import');

//db
const db = require('./helpers/db');
db();

//models

const Participant = require('./models/Participant');
const Session = require('./models/Session');
const Manager = require('./models/Manager');
const Vote = require('./models/Vote');


// resolvers
const resolvers = require('./graphql/resolvers/index');

// importSchema can run properly at version of 0.7.1
const server = new ApolloServer({
	typeDefs: importSchema('./graphql/schema/schema.graphql'),
	resolvers,
	context: ({req}) => ({
		Participant,
        Session,
		Manager,
		Vote,
		pubSub
	}),
	introspection: true
});

const app = express();
server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(process.env.PORT || 4000, () =>
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
