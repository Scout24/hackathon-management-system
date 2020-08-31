import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import './home.css'
import tino from '../images/team/tino_nitze.jpeg'
import alia from '../images/team/alia_assad.png'
import fabian from '../images/team/fabian_wolter.png'
import jakob from '../images/team/jakob_panten.png'
import christina from '../images/team/christina_feser.jpg'
import tarandeep from '../images/team/tarandeep_singh.jpg'
import hw2019_jan_berlin from '../videos/hw2019_ber.mp4'
import hw2019_jan_aftermovie from '../videos/Hackathon_2019-Jan_Film_subsampled-v2.mp4'
import hw2019_oct_timelapse from '../videos/Pitch-01-timelapse-graded-compressed.mp4'
import Gallery from 'react-photo-gallery'
import { photos2018 } from '../helpers/photogallery'
import { photos2019 } from '../helpers/photogallery'

import IdeasList from './ideasList'
import { Link } from 'react-router-dom'

// hackathon data
import { selectUpcomingHackathon } from '../helpers/hackathonHelper'
import Timer from '../components/Timer'
import { getListofDataFromDynamoDB } from '../actions/dynamoDBFetchActions'




const Gallery2018 = () => <Gallery photos={photos2018} />
const Gallery2019 = () => <Gallery photos={photos2019} />


const Home = () => {

	const [hackathons, setHackathons] = useState({})
	const [hackathon, setHackathon] = useState({})
	const [values, setValues] = useState({
		error: true,
		success: false
	})

	const { error, success } = values


	useEffect(() => {
		loadIdeas()
	}, [])

	const loadIdeas = () => {
		getListofDataFromDynamoDB('hackathon').then(data => {
			if(data) {
				setHackathons(data)
				setHackathon(selectUpcomingHackathon(data))
				setValues({...values, error: false, success: true})
			} else {
				setValues({...values, error: true, success: false})
			}
		})
	}


	return (
		<Layout>
			<div className="grid-item one-whole">
				{hackathon ?
					<section id="main">
						<div className="grid grid-flex gutter grid-justify-center">
							<div className="grid-item one-whole align-center">
								<h1 id="hw-title">{hackathon.title}</h1>
								<h1>{new Date(hackathon.startDate).toDateString()} - {new Date(hackathon.endDate).toDateString()}</h1>
							</div>
							<div className="grid-item one-whole align-center">
								<Link to="/ideationPortal" className="button button-large header-ideas-button">
									<p id="countdown" className="pulse"><Timer countDownDateTime={hackathon.startDate}/></p> <span role="img" aria-label="lightbulb">💡</span>Ideation portal
								</Link>
							</div>

							<div className="grid-item one-whole align-center tile-background">
							</div>
						</div>
					</section>
					: <section/>
				}


				{hackathon ?
					<section id="ideas" className="home-section light-section">
						<div className="grid grid-flex gutter grid-justify-center">
							<div className="grid-item one-whole align-center">
								<h2 className="text-center">Our Ideas Categories</h2>
							</div>
							<div className="grid-item two-thirds">
								<h3 className="">🚀 Bleeding edge technology</h3>
								<p>In the past we might have neglected this traditional part of the Hackweek a bit - shame on us! This "category" is for all those projects or initiatives
								   that have a focus on research and/or development.
								   You always wanted to try out an interesting technology but you couldn't find the right time or occasion -
								   here is your chance to show off some cutting edge tech stuff!</p>
							</div>
							<div className="grid-item two-thirds">
								<h3 className="">💝 Give something back</h3>
								<p>AKA - the social category. These days it's even more important to be giving something back to society or to make our platform better accessible.
								   Anything that can be considered non profit and serves a good cause belongs into this category.</p>
							</div>
							<div className="grid-item two-thirds">
								<h3 className="">💸 Move the needle</h3>
								<p>Anything that is tangible and has a positive effect on one of our main business KPIs, if it's traffic, listings or money goes here.
								   So if you have found the money printing revolutionary feature that no-one had come up with yet - place it here and let's try it!</p>
							</div>

							<IdeasList/>

						</div>
					</section>
					:
					<section>
						<div className="grid grid-flex gutter grid-justify-center">
							<div className="grid-item one-whole align-center">
								<h1 className="text-center hw-title">There is no upcoming Hackweek</h1>
							</div>
						</div>
					</section>
				}

				{hackathon ?
					<section id="team" className="home-section padding-bottom-none">
						<div className="grid grid-flex gutter grid-justify-center">
							<div className="grid-item one-whole align-center">
								<h2 className="text-center">Team</h2>
							</div>
							<div className="grid-item desk-two-sixths lap-two-sixths palm-one-whole align-center">
								<img className="teamImage" src={tino} alt="tino nitze" width="200"/>
								<h4>Tino Nitze</h4>
							</div>
							<div className="grid-item desk-two-sixths lap-two-sixths palm-one-whole align-center">
								<img className="teamImage" src={alia} alt="alia assad" width="200"/>
								<h4>Alia Assad</h4>
							</div>
							<div className="grid-item desk-two-sixths lap-two-sixths palm-one-whole align-center">
								<img className="teamImage" src={fabian} alt="fabian wolter" width="200"/>
								<h4>Fabian Wolter</h4>
							</div>
							<div className="grid-item desk-two-sixths lap-two-sixths palm-one-whole align-center">
								<img className="teamImage" src={jakob} alt="jakob panten" width="200"/>
								<h4>Jakob Panten</h4>
							</div>
							<div className="grid-item desk-two-sixths lap-two-sixths palm-one-whole align-center">
								<img className="teamImage" src={christina} alt="christina feser" width="200"/>
								<h4>Christina Feser</h4>
							</div>
							<div className="grid-item desk-two-sixths lap-two-sixths palm-one-whole align-center">
								<img className="teamImage" src={tarandeep} alt="tarandeep singh" width="200"/>
								<h4>Tarandeep Singh</h4>
							</div>
							<div className="grid-item one-whole align-center tile-background">
							</div>
						</div>
					</section>
					:
					<section/>
				}


				{hackathon ?
					<section id="faq" className="home-section light-section">
						<div className="grid grid-flex gutter grid-justify-center padding-left-l padding-right-l">
							<div className="grid-item one-whole align-center margin-bottom-l">
								<h2 className="text-center">Hackweek Information</h2>
							</div>
							<div className="grid-item desk-two-thirds lap-two-thirds palm-one-whole margin-bottom-m">
								{hackathon.description}
							</div>
						</div>
					</section>
					:
					<section/>
				}


				<section id="impressions" className="home-section padding-bottom-none">
					<div className="grid grid-flex gutter grid-justify-center">
						<div className="grid-item one-whole align-center">
							<h2 className="text-center">2019 October Impressions</h2>
						</div>
						<div className="grid-item five-sixths align-center">
							<video width="100%" className="img-fluid" autoPlay loop muted>
								<source src={hw2019_oct_timelapse} />
								Your browser does not support the video tag.
							</video>
						</div>
						<div className="grid-item five-sixths align-center">
							<Gallery2019 />
						</div>
					</div>

					<div className="grid grid-flex gutter grid-justify-center">
						<div className="grid-item one-whole align-center padding-top-xl">
							<h2 className="text-center">2019 January Impressions</h2>
						</div>
						<div className="grid-item five-sixths align-center">
							<video width="100%" className="img-fluid" autoPlay loop muted>
								<source src={hw2019_jan_berlin} />
								Your browser does not support the video tag.
							</video>
						</div>
						<div className="grid-item five-sixths align-center">
							<video width="100%" className="img-fluid" autoPlay loop muted>
								<source src={hw2019_jan_aftermovie} />
								Your browser does not support the video tag.
							</video>
						</div>
					</div>

					<div className="grid grid-flex gutter grid-justify-center padding-top-xl">
						<div className="grid-item one-whole align-center">
							<h2 className="text-center">2018 Impressions</h2>
							{/*	Jan 2018*/}
						</div>
						<div className="grid-item five-sixths align-center">
							<Gallery2018 />
						</div>

						<div className="grid-item one-whole align-center tile-background">
						</div>
					</div>
				</section>
			</div>
		</Layout>
	)
}

export default Home
