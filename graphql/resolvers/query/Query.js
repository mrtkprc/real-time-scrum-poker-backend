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
};

module.exports = Query;
