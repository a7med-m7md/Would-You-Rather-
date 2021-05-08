import React, { Component } from 'react'
import UserCard from './UserCard'
import { connect } from 'react-redux'

class Leadboard extends Component {
    render() {
        return (
            <div>
                <br />
                <br />
                {this.props.ids.map(id=> <UserCard key={id} id={id}/>)}
            </div>
        )
    }
}

const mapStateToProps = ({users})=>{
    ///Second number 
    const ids = Object.keys(users).sort((a, b)=> Object.keys(users[b].answers).length + users[b].questions.length - (Object.keys(users[a].answers).length + users[a].questions.length ))
    console.log(ids, '15d4as5d4a5s4d5as4d5as4d5as4d')
    console.log(users, '2')
    return {
        ids
    }
}


export default connect(mapStateToProps)(Leadboard);