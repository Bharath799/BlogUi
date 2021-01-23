import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Userinfo extends React.Component{
    constructor(){
        super()
        this.state = {
            users:{},
            posts:[]
        }
    }
    componentDidMount(){
        const id1=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id1}`)
        .then((response)=> {
            const user = response.data
            this.setState({
                users:user
            })
        })
            .catch((err)=>{
                alert("Error")
            })
        
        const id2=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id2}`)
        .then((response)=> {
            const post=response.data
            this.setState({
                posts:post
            })
        })
            
        }
        render(){
            return(
                <div>
                <h1>{this.state.users.name}</h1>
                <h2>UserShow:{this.props.match.params.id}</h2>
                <h3>Posts Writen By:{this.state.users.name}</h3>
                <ul>{this.state.posts.map(post => {
                    return <li key={post.id}>{post.title}</li>
                })}
                </ul>
                </div>

            )
        }
    }
    export default Userinfo