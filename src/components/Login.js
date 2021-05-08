import './login.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import { handleGetUsers } from '../actions/users'

class Login extends Component {
    componentDidMount(){
        this.props.dispatch(handleGetUsers())
    }

    state = {
        value: null
    }
    

    handleLogin = (e)=>{
        e.preventDefault()
        this.setState({value: e.target.value})
    }

    

    render() {
        const { usersIds, users} = this.props
        if(this.state.value !== null){
            return <Dashboard authedUser={this.state.value}/>
        }
        return (
            this.props.loading === true? null :
            (<div className='center'>
                <h1>Welcome to Would you rather App!</h1>
                <h3>Please sign in to continue</h3>
                <img src="https://miro.medium.com/max/1200/1*i1yreXvK0kGrS9_uy5qKHQ.jpeg" alt='user' style={{height: '200px', width: '200px'}}/>
                <h2 style={{color: '#0BCAD6'}}>Sign in</h2>
                <select defaultValue='no-value'  name="users" id="users" onChange={(e)=> this.handleLogin(e)} style={{height: '40px', width: '75%', padding: '10px', margin: '10px'}}>
                    <option value='no-value' disabled >Please select</option>
                    {usersIds.map(id=><option key={id} value={id} style={{height: '50px'}}>{users[id].name}</option>)} 
                </select>
            </div>)
        )
    }
}

const mapStateToProps = ({users, authedUser})=>{
    return {
        loading: Object.keys(users).length === 0,
        usersIds: Object.keys(users),
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(Login)