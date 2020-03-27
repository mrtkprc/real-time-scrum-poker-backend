const Query = {
	participant: (parent, args, { Participant }) => {
		return Participant.findById(args.id);
	},
	session: (parent, args, {Session}) => {
		return Session.findById(args.id);
	},
	findSessionBySessionNumber: (parent, args, {Session}) => {
		return Session.findOne({sessionNumber: args.sessionNumber});
	},
	manager: (parent, args, {Manager}) => {
		return Manager.findById(args.id);
	},
};

module.exports = Query;
