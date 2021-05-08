import { _getUsers, _getQuestions } from '../utils/_DATA'
import { getQuestions } from '../actions/questions'
import { getUsers } from '../actions/users'
import { authedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading' 

export const LOG_OUT = 'LOG_OUT'

export function getInitialData(userId=null){
    return (dispatch)=>{
        dispatch(showLoading())
        dispatch(authedUser(userId))
        _getQuestions()
                    .then((questions)=> 
                        dispatch(getQuestions(questions)  
                )) 
        _getUsers()
                .then((users)=> dispatch(getUsers(users)))
                .then(()=>{
                    dispatch(hideLoading())   
                })

    }
}


export function logOut(){
    return {
        type: LOG_OUT
    }
}