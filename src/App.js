import React from 'react'
import { BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import UsersInfo from './UsersInfo'
import Posts from './Posts'
import PostShow from './PostShow'


function App(props){
    return(
        < BrowserRouter>
        <div>
            
            <Link to="/">Home</Link>
            <Link to="/users"> |Users</Link>
            <Link to="/posts"> |Posts</Link>
            
            


            <Route path="/" component={Home} exact={true} /> 
            <Route path="/users" component = {Users} exact={true}/>
            <Route path="/users/:id" component = {UsersInfo}/>
            <Route path="/Posts/:id" component={PostShow} />
            <Route path="/Posts" component={Posts} exact={true}/>
            
            
            
        </div>
        </ BrowserRouter>

    )
}

export default App