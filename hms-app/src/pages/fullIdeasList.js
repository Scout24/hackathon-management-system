import React, { useEffect, useState } from 'react'
import './pitchGenerator/generator.css'
import IdeaCardBig from '../components/IdeaCardBig'
import Layout from '../components/Layout'
import { getListofDataFromDynamoDB } from '../actions/dynamoDBFetchActions'

const FullIdeasList = () => {

    const [values, setValues] = useState({
        error: false,
        isLoading: true,
        ideas: []
    })

    const {error, isLoading, ideas} = values

    useEffect(() => {
        loadIdeas()
    },[])


    const loadIdeas = () => {
        getListofDataFromDynamoDB('idea').then(data => {
            setValues({...values, ideas: data, error: false, isLoading: false})
        }, () => {
            setValues({...values, error: true, isLoading: false})
        })
    }

    const listIdeas = () => {
        return ideas.map((idea, i) => {
            return (
                <div key={i} className="grid-item desk-one-whole lap-one-whole palm-one-whole">
                    <IdeaCardBig idea={idea}/>
                </div>
            )
        })
    }



    return (
        <Layout>
            <div className="grid-item one-whole">
                <section id="main">
                    <div className="grid grid-flex gutter grid-justify-center">
                        <div className="grid-item one-whole">
                            <div className="align-center margin-top-l">
                                <h2>Current Ideas</h2>
                            </div>
                        </div>

                        <div  className="grid-item desk-two-thirds lap-two-thirds palm-one-whole">
                            {error &&
                            <div className="status-message status-message--short status-error">
                                <h3>Error loading!</h3>
                                <p>
                                    something went wrong...
                                </p>
                            </div>
                            }
                            {isLoading &&
                            <div className="status-message status-message--short status-warning">
                                <h3>Loading...</h3>
                                <p>
                                    Data is coming.
                                </p>
                            </div>
                            }
                            <div className="grid grid-flex gutter grid-justify-center">
                                {ideas && listIdeas()}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default FullIdeasList
