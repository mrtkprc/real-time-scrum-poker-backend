const { PubSub } = require('apollo-server-express');
const { RedisPubSub } = require('graphql-redis-subscriptions');
const Redis = require('ioredis');

const options = {
    host: '127.0.0.1',
    port: 6379,
    retryStrategy: times => {
      // reconnect after
      return Math.min(times * 50, 2000);
    }
  };


const pubSubBuildIn = new PubSub();
/*
const pubSubRedis = new RedisPubSub({
    publisher: new Redis(options),
    subscriber: new Redis(options)
});
*/

const pubSub = pubSubBuildIn;
//const pubSub = pubSubRedis;


module.exports.pubSub = pubSub;