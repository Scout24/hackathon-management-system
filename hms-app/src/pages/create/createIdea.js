import React from 'react'
import Layout from '../../components/Layout'
import CreateIdeaForm from '../../components/form/CreateIdeaForm'


const CreateIdea = () => {
	return (
		<Layout>
			<div className="grid-item one-whole">
				<section id="main">
					<div className="grid grid-flex gutter grid-justify-center">
						<div className="grid-item one-whole">
							<div className="align-center margin-top-l">
								<h2>Add your Idea!</h2>
							</div>
						</div>

						<div  className="grid-item desk-two-thirds lap-two-thirds palm-one-whole">
							<CreateIdeaForm />
						</div>
					</div>
				</section>
			</div>
		</Layout>
	)
}

export default CreateIdea
