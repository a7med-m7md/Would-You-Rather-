import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import './app.css'

class App extends Component {

  
  state = {
    answered: false,
  }

  handleAnswered = (e)=>{
    this.setState({answered: true})
  }

  handleUnanswered = ()=>{
    this.setState({answered: false})
  }

  

  render() {
    const {questionsIds, authedUser, users, loading} = this.props
    var ansQuestions = users[authedUser].answers
    ansQuestions = this.state.answered ?
                questionsIds.filter(id=>  id in ansQuestions) 
                : questionsIds.filter(id=>  !(id in ansQuestions))
    return (
        <div className='questions-container'>
          <div className="btns--container">
              <button onClick={this.handleUnanswered} style={!this.state.answered? {backgroundColor: 'grey'}: null}>Unanswered</button>
              <button onClick={this.handleAnswered} style={this.state.answered? {backgroundColor: 'grey'}: null}>answered</button>
          </div>
          <div>
            
            {
                loading===true? null: ansQuestions.map(id=> <Question key={id} id={id} />)
            }
          </div>
          
        </div>  
    )
  }
}

const mapStateToProps = ({questions, authedUser, users})=>{
  // I will render the questions based on the time and extract the ids of these questions
  // Qustions =>> Object
  const questionsIds = Object.keys(questions).sort((a, b)=> questions[b].timestamp - questions[a].timestamp)

  return {
    loading: authedUser === null,
    questionsIds,
    users,
  }
}

export default connect(mapStateToProps)(App);
