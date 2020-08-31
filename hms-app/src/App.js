import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import home from './pages/home'
import fullIdeasList from "./pages/fullIdeasList"
import createHackathon from './pages/create/createHackathon'
import createIdea from './pages/create/createIdea'
import dashboard from "./pages/dashboard"
import createCategory from './pages/create/createCategory'
import listHackathons from './pages/list/listHackathons'
import editHackathon from './pages/create/editHackathon'
import createUser from './pages/create/createUser'
import listUsers from './pages/list/listUsers'
import listCategories from './pages/list/listCategories'
import listIdeas from './pages/list/listIdeas'
import editIdea from './pages/create/editIdea'


function App() {
    return (
    <div className="App">
        <Route exact path="/" component={home} />
        <Route path="/ideas" component={fullIdeasList} />
        <Route path="/dashboard" component={dashboard} />
        <Route path="/create/hackathon" component={createHackathon} />
        <Route path="/create/idea" component={createIdea} />
        <Route path="/create/category" component={createCategory} />
        <Route path="/create/user" component={createUser} />
        <Route path="/list/hackathon" component={listHackathons} />
        <Route path="/list/user" component={listUsers} />
        <Route path="/list/idea" component={listIdeas} />
        <Route path="/list/category" component={listCategories} />
        <Route path="/edit/hackathon/:id?" component={editHackathon} />
        <Route path="/edit/idea/:id?" component={editIdea} />
    </div>
  );
}

export default App;
