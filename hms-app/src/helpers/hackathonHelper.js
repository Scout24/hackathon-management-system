export const selectUpcomingHackathon = (hackathons) => {
	const futureHackathons = hackathons.filter(hackathon => {
		const currentDate = new Date()
		const hackathonDate = new Date(hackathon.startDate)
		// currentDate needs to be < hackathonDate for it to be true and in the future
		return currentDate < hackathonDate
	})
	// set the first future Hackathon as the upcoming one
	return futureHackathons[0]
}

