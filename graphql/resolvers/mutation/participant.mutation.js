module.exports = {
	createParticipant: async (parent, {data: {nickname, sessionNumber}}, {Session, Participant, pubSub}) => {
		try {

			/*TODO:MK - Aggregate following two queries in the future.*/
			const session = await Session.findOne({"sessionNumber": sessionNumber});
			const participant = await new Participant({
				nickname,
				sessionId: session._id
			}).save();

			await pubSub.publish('newParticipantArrived',
				{newParticipantArrived:participant}
			);

			return participant;

		}catch (e) {
			throw new Error(e);
		}
	}
};
