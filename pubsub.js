const { PubSub } = require('apollo-server-express');
const { RedisPubSub } = require('graphql-redis-subscriptions');

const pubSubBuildIn = new PubSub();
/*
const pubSubRedis = new RedisPubSub({
    connection:{
        host:'127.0.0.1',
        port: 6379,
        retry_strategy: function(options){
            return Math.max(options.attempt*100,3000);
        }
    }

});
*/

const pubSub = pubSubBuildIn;
//const pubSub = pubSubRedis;


module.exports.pubSub = pubSub;





