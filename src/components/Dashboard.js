import React, { Component } from 'react'
import { connect } from 'react-redux'
import App from './App'
import { getInitialData } from '../actions/shared'
import NewQuestion from './NewQuestion'
import { Route } from 'react-router-dom'
import CurrentQuestion from './CurrentQuestion'
import Nav from './Nav'
import LoadingBar from 'react-redux-loading'
import Leadboard from './Leadboard'
import Login from './Login'

class Dashboard extends Component {
    componentDidMount(){
        this.props.dispatch(getInitialData(this.props.authedUser))
    }

    render() {
        if(this.props.auth === null)
            return <Login />
        return (
            <>
                <LoadingBar />
                <div>
                    <Nav />
                    <Route exact path='/'>
                        <App authedUser={this.props.auth}/>
                    </Route>
                    <Route path='/question/:id' component={CurrentQuestion} />
                    <Route path='/new' component={NewQuestion} />
                    <Route path='/leadboard' component={Leadboard} />
                </div>
            </>
            
        )
    }
}

const mapStateToProps = ({authedUser})=>{
    return {
        auth : authedUser
    }
}

export default connect(mapStateToProps)(Dashboard)