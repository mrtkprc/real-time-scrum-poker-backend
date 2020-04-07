const http = require('http');
require('dotenv').config();
const express = require('express');
const { ApolloServer, PubSub } = require('apollo-server-express');
//TODO:MK - Use RedisPubSub
//const { RedisPubSub } = require('graphql-redis-subscriptions');
const { importSchema } =  require('graphql-import');

//db
const db = require('./helpers/db');
db();

//models

const Participant = require('./models/Participant');
const Session = require('./models/Session');
const Manager = require('./models/Manager');
const Vote = require('./models/Vote');
const pubSub = new PubSub();

// resolvers
const resolvers = require('./graphql/resolvers/index');

// importSchema can run properly at version of 0.7.1
const server = new ApolloServer({
	typeDefs: importSchema('./graphql/schema/schema.graphql'),
	resolvers,
	subscriptions:{
		onConnect: (connectionParams, webSocket, context) => {
			console.log("One websocket connection established: \n");

			setTimeout(() => {
				console.log(`Subscriptions: ${pubSub.subscriptions}`);
				console.log(`Current SubIdCounter: ${pubSub.subIdCounter}`);
			},2000);
		},
		onDisconnect:(webSocket, context) => {
			console.log("One websocket connection disconected: \n");

			setTimeout(() => {
				console.log(`Subscriptions: ${pubSub.subscriptions}`);
				console.log(`Current SubIdCounter: ${pubSub.subIdCounter}`);
			},2000);
		}
	},
	context: ({req}) => ({
		Participant,
        Session,
		Manager,
		Vote,
		pubSub
	})
});

const app = express();
server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: 4000 }, () =>
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
