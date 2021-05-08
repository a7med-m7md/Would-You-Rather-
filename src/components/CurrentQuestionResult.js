import React, { Component } from 'react'
import { Avatar } from '@material-ui/core'
import './currentquestionresult.css'
import { connect } from 'react-redux'

class CurrentQuestionResult extends Component {
    render() {
        const {optionOne, optionTwo} = this.props
        const choiceOne = optionOne.length
        const choiceTwo = optionTwo.length
        const total = choiceOne + choiceTwo
        return (
            <div className='current-question'>
                <h2 className='current-user-name'>Added by {this.props.name}</h2>
                <div className='current-question-body'>
                    <Avatar src={this.props.avatarURL} className='user-img' style={{height: '100px', width: '100px'}}/>
                    <div className='l-line'></div>
                    <div className='choices'>
                        <h1>Result : </h1>
                        <div className='inner-choices'>
                            <div className='percentage'>{(choiceOne/total)*100}%</div>
                            <progress value={choiceOne} min='0' max={total} data-label='50%'></progress>
                            <div className='vote-result'>{choiceOne} of {total} votes</div>
                        </div>
                        <div className='inner-choices'>
                            <div className='percentage'>{(choiceTwo/total)*100}%</div>
                            <progress value={choiceTwo} min='0' max={total}></progress>
                            <div className='vote-result'>{choiceTwo} of {total} votes</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({users, questions}, {id})=>{
    const optionOne = questions[id].optionOne.votes
    const optionTwo = questions[id].optionTwo.votes
    return {
        optionOne,
        optionTwo
    }
}

export default connect(mapStateToProps)(CurrentQuestionResult);