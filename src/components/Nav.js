import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'
import { connect } from 'react-redux'
import {  logOut } from '../actions/shared'
import { withRouter } from 'react-router-dom'

function Nav(props) {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active' style={{color:'black'}}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/new' activeClassName='active' style={{color:'black'}}>New Question</NavLink>
                </li>
                <li>
                    <NavLink to='/leadboard' activeClassName='active' style={{color:'black'}}>Leadboard</NavLink>
                </li>
                <li>
                    <button onClick={()=>handleLogOut(props)} className='log-out-btn'>Log out</button>
                </li>

                <li className='loged-user'>User : {props.authedUser}</li>
            </ul>
        </nav>
    )
}


const handleLogOut = (props)=>{
    window.location.href='/'
    props.dispatch(logOut())
}

const mapStateToProps = ({authedUser})=>{
    return {
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(Nav))
