import React, { Component } from 'react'
import { Avatar } from '@material-ui/core'
import './usercard.css'
import { connect } from 'react-redux'

class UserCard extends Component {
    render() {
        const {users, id} = this.props
        const user = users[id]
        return (
            <div className='card-container'>
                <div className='user-img'>
                    <Avatar style={{height: '100px', width: '100px'}} src={user.avatarURL} alt="user avatar"/>
                </div>
                <div className='line'></div>
                <div style={{width:'50%'}}>
                    <h1>{user.name}</h1>
                    <div className='info'> 
                        <div>Answered questions</div>
                        <div>{Object.keys(user.answers).length}</div>
                    </div>
                    <div className='line-2'></div>
                    <div className='info'>
                        <div>Created questions</div>
                        <div>{user.questions.length }</div>
                    </div>
                </div>
                <div className='line'></div>
                <div className='score'>
                    <div className='score-header'>Score</div>
                    <div className='score-number'>{Object.keys(user.answers).length + user.questions.length}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({users})=>{
    return {
        users
    }
}

export default connect(mapStateToProps)(UserCard);