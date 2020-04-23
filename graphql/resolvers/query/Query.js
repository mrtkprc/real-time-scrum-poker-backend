const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Query = {
	participant: (parent, args, { Participant }) => {
		return Participant.findById(args.id);
	},
	session: (parent, args, {Session}) => {
		return Session.findById(args.id);
	},
	findSessionBySessionNumber: async (parent, args, {Session}) => {
		const session = await Session.findOne({sessionNumber: args.sessionNumber});

		if(session === null)
		{
			throw new Error("Couldn't find the session.");
		}

		return session;
	},
	vote: (parent, args, {Vote}) => {
		return Vote.findById(args.id);
	},
	voteResults: async (parent,{sessionId},{Vote}) => {
		console.log(sessionId);
		const VoteResults = await Vote.aggregate([
			{
				$match:{
					sessionId:ObjectId(sessionId),
					isGiven: 1,
				}
			},
			{
				$group:{
					_id: "$vote",
					total: {$sum: 1}
				}
			},
			{
				$project:{
					_id: 0,
					vote: "$_id",
					total: 1,
				}
			}
		]);
		console.log("VoteResults:", VoteResults);
		return VoteResults;
	}
};

module.exports = Query;
