import React from 'react'
import Layout from '../../components/Layout'
import CreateHackathonForm from '../../components/form/CreateHackathonForm'


const CreateHackathon = () => {
	return (
		<Layout>
			<div className="grid-item one-whole">
				<section id="main">
					<div className="grid grid-flex gutter grid-justify-center">
						<div className="grid-item one-whole">
							<div className="align-center margin-top-l">
								<h2>Create a Hackweek</h2>
							</div>
						</div>

						<div  className="grid-item desk-two-thirds lap-two-thirds palm-one-whole">
							<CreateHackathonForm />
						</div>
					</div>
				</section>
			</div>
		</Layout>
	)
}

export default CreateHackathon
