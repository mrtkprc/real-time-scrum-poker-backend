module.exports = {
	createParticipant: async (parent, {data: {nickname, sessionId}}, {Participant, pubSub}) => {
		try {
			const participant = await new Participant({
				nickname,
				sessionId
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
