import React, { Component } from 'react'
import { Avatar } from '@material-ui/core'
import './currentquestion.css'
import { connect } from 'react-redux'
import CurrentQuestionResult from './CurrentQuestionResult'
import { handleAnswerQuestion } from '../actions/questions'
import { getInitialData } from '../actions/shared'


class CurrentQuestion extends Component {
    state = {
        value: '',
    }

    componentDidMount(){
        this.props.dispatch(getInitialData(this.props.authedUser))
    }

    handleAnswer = (id)=>{
        const answer = {authedUser: this.props.authedUser, qid: id, answer: this.state.value }
        this.props.dispatch(handleAnswerQuestion(answer))
        this.props.dispatch(getInitialData(this.props.authedUser))
    }
    render() {
        if(this.props.question === null){
            return <h1 style={{textAlign: 'center', width: '100%'}}>404 Question Not found</h1>
        }
        const {optionOne, optionTwo, id} = this.props.question
        const {avatarURL, name,  } = this.props.creator
        const { answers } = this.props.user

        return (
            this.props.id in answers ?
                <CurrentQuestionResult id={id} name={name} avatarURL={avatarURL} an/>
                    :
                (<div className='current-question'>
                    <h2 className='current-user-name'>{name} asked</h2>
                    <div className='current-question-body'>
                        <Avatar src={avatarURL} className='user-img' style={{height: '100px', width: '100px'}}/>
                        <div className='line'></div>
                        <div className='choices'>
                            <h1>Would You Rathe ...</h1>
                            <div className='inner-choices'>
                                <input type="radio" id="male" name="options" value='optionOne' onChange={(e)=>this.setState({value: e.target.value})}/>
                                <label htmlFor="male">{optionOne.text}</label>
                            </div>
                            <div className='inner-choices'>
                                <input type="radio" id="female" name="options" value='optionTwo' onChange={(e)=>this.setState({value: e.target.value})}/>
                                <label htmlFor="female">{optionTwo.text}</label><br/>
                            </div>
                            <button className='btn' onClick={(e)=>this.handleAnswer(id)}>Submit</button>
                        </div>
                    </div>
                </div>
                )
        )
    }
}

const mapStateToProps = ({questions, users, authedUser},{match} )=>{
    const { id } = match.params
    if(id in questions){
        const question = questions[id]
        const creator = users[question.author]
        const user = users[authedUser]    
        return {
            id,
            question,
            creator,
            user,
            authedUser,
            questions
        }
    }
    else{
        return {
            question: null,
            authedUser
        }
    }
}

export default connect(mapStateToProps)(CurrentQuestion);