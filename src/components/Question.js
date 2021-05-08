import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './question.css'
import { getInitialData } from '../actions/shared'

class Question extends Component {
    componentDidMount(){
        this.props.dispatch(getInitialData(this.props.authedUser))
      }
    render() {
        const {id, question, users } = this.props
        const { author, optionOne} = question
        const { name, avatarURL } = users[author]
        return (
            <div className='question--container'>
                <h3 className="username">{name}</h3>
                <hr />
                <div className="question--body">
                    <div className="user--img">
                        <Avatar src={avatarURL} style={{height: '100px', width: '100px'}}/>
                    </div>
                    <div className="question--controllers">
                        <div>
                            <h3 >Would you rathe?</h3>
                        </div>
                        <div>
                            <p>- {optionOne.text}</p>
                        </div>
                        <div>
                            <Link className="poll--btn" to={`/question/${id}`} >View Poll</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToprops = ({questions, authedUser, users},{id})=>{
    //Here I want to render the question of Id ==> id
    const question = questions[id]
    
    return {
        question,
        users: users!=={} && users,
        authedUser,
    }

}

export default connect(mapStateToprops)(Question)
