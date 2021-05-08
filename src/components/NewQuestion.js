import React, { Component } from 'react'
import './newQuestion.css'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { withRouter } from 'react-router-dom'
class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: ''
    }

    
    handleSubmit = (e)=>{
        e.preventDefault()
        const {authedUser} = this.props
        const question = {optionOneText: this.state.optionOne, optionTwoText: this.state.optionTwo, author: authedUser}
        this.props.dispatch(handleAddQuestion(question))
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="question-container">
                <form onSubmit={this.handleSubmit}>
                    <h1 className='header'>Create New Question</h1>
                    <h3 className='text'>Complete the question :</h3>
                    <h2 className='wouldrather'>Would you rather ...</h2>
                    <input type="text" onChange={(e)=>this.setState({optionOne: e.target.value})} className='input-field' placeholder='Enter Option One Text Here'/>
                    <h2 className="or">OR</h2>
                    <input type="text" onChange={(e)=>this.setState({optionTwo: e.target.value})} className='input-field' placeholder='Enter Option Two Text Here'/>
                    <button className='btn'>Submit</button>
                </form>
            </div>
        )
    }
}


const mapStateToProps = ({questions, authedUser, users})=>{
    return {
        authedUser,
        users
    }
}

export default withRouter(connect(mapStateToProps)(NewQuestion))