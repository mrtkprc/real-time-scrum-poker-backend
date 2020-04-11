module.exports = {
	createParticipant: async (parent, {data: {nickname, sessionNumber, isManager}}, {Session, Participant, pubSub}) => {
		try {

			/*TODO:MK - Aggregate following two queries in the future.*/
			const session = await Session.findOne({"sessionNumber": sessionNumber});
			const participant = await new Participant({
				nickname,
				sessionId: session._id,
				isManager
			}).save();

			await pubSub.publish('newParticipantArrived',
				{newParticipantArrived:participant}
			);

			return participant;

		}catch (e) {
			throw new Error(e);
		}
	},
	createScrumMasterWithSession: async (parent, {data: {sessionNumber, description}},{Participant, Session}) => {
        try{
            const session = await Session({
                sessionNumber,
                description
            }).save();

            const participant = await new Participant({
				nickname: "ScrumMaster",
				sessionId: session._id,
				isManager: 1
            }).save();
            
            return participant;

        }catch(e){
            throw new Error(e);
        }
    }
};
