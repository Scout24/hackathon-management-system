import React from 'react'
import './IdeaCardBig.css'
import { Link } from 'react-router-dom'
import { deleteItemFromDynamoDB } from '../actions/dynamoDBFetchActions'


const IdeaCardBigManageable = ({idea}) => {

	const deleteConfirm = id => {
		let answer = window.confirm('Are you sure you want to delete this' +
			' Idea?')
		if (answer) {
			deleteItemFromDynamoDB(id, 'idea')
			// Router.push('/list/ideas')
		}
	}

	return (
		<div className="margin idea-big" style={{}}>
			<div className='votes pull-right'>
				{Math.floor(Math.random()*10+1)} Votes
			</div>
			<div className='user-name-big'>
				unknown user
			</div>
			<div className="idea-name-big">
				<h2>{idea.title}</h2>
			</div>
			<div className="margin-top-l">
				<span className="category">{idea.category}</span>
			</div>
			<div className="margin-top-l">
				<h3>Problem hypothesis</h3>
				<div>
					{idea.problem_hypothesis}
				</div>
			</div>
			<div className="margin-top-l">
				<h3>Who do you need?</h3>
				<p>{idea.people_needed}</p>
			</div>
			<div className="margin-top-l">
				<h3>Who benefits?</h3>
				<div>
					{idea.benefit}
				</div>
			</div>

			<div className="margin-top-l">
				<h3>Slack Channel</h3>
				<p>{idea.communication_channel}</p>
			</div>

			<div className="margin-top-l">
				<h3>GitHub Repository</h3>
				<p>{idea.git_repo}</p>
			</div>
			<div className="margin-top-l">
				{idea.pitch_video.length > 0 &&
					<a className="video-button pitch-button" href={idea.pitch_video}>Pitch Video</a>
				}
				{idea.final_video.length > 0 &&
					<a className="video-button final-button" href={idea.final_video}>Final Video</a>
				}
			</div>

			<Link className="button button-primary" to={`/edit/idea/id=${idea.id}`}>Edit</Link>
			<button onClick={() => deleteConfirm(idea.id)} className="button margin-left-m">Delete</button>
		</div>
	)
}

export default IdeaCardBigManageable
