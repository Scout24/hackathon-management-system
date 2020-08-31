import React from 'react'
import Layout from '../../components/Layout'
import CreateHackathonForm from '../../components/form/CreateHackathonForm'


const EditHackathon = ({ match }) => {
	const {id} = match.params

	return (
		<Layout>
			<div className="grid-item one-whole">
				<section id="main">
					<div className="grid grid-flex gutter grid-justify-center">
						<div className="grid-item one-whole">
							<div className="align-center margin-top-l">
								<h2>Edit a Hackweek</h2>
							</div>
						</div>

						<div  className="grid-item desk-two-thirds lap-two-thirds palm-one-whole">
							{id ?
								<CreateHackathonForm hackathonId={id}/>
								: <CreateHackathonForm />
							}
						</div>
					</div>
				</section>
			</div>
		</Layout>
	)
}

export default EditHackathon
