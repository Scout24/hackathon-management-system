import React from 'react'
import './dashboard.css'
import Layout from "../components/Layout";
import { Link } from 'react-router-dom'

const Dashboard = () => {

    return (
        <Layout>
            <div className="grid-item one-whole" >
                <div className="grid grid-flex grid-justify-center">
                    <div className="grid-item one-whole">
                        <div className="align-center margin-top-l">
                            <h2>Dashboard</h2>
                        </div>
                    </div>
                    <div className="grid-item one-half align-center">
                        <div className="item-card">
                            <h3>Hackathon</h3>
                            <Link className="button button-secondary" to="/list/hackathon">Manage</Link>
                            <Link className="button button-secondary" to="/create/hackathon">Create</Link>
                        </div>
                    </div>
                    <div className="grid-item one-half align-center">
                        <div className="item-card">
                            <h3>User</h3>
                            <Link className="button button-secondary" to="/list/user">Manage</Link>
                            <Link className="button button-secondary" to="/create/user">Create</Link>
                        </div>
                    </div>
                    <div className="grid-item one-half align-center">
                        <div className="item-card">
                            <h3>Idea</h3>
                            <Link className="button button-secondary" to="/list/idea">Manage</Link>
                            <Link className="button button-secondary" to="/create/idea">Create</Link>
                        </div>
                    </div>
                    <div className="grid-item one-half align-center">
                        <div className="item-card">
                            <h3>Category</h3>
                            <Link className="button button-secondary" to="/list/category">Manage</Link>
                            <Link className="button button-secondary" to="/create/category">Create</Link>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default Dashboard
