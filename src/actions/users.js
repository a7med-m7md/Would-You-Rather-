import { _getUsers } from "../utils/_DATA"

export const GET_USERS = 'GET_USERS'
export const ADD_CREATED_QUESTION = 'ADD_CREATED_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'

export function getUsers(users){
    return {
        type: GET_USERS,
        users
    }
}

export function addCreatedQuestion(authedUser, id){
    return {
        type: ADD_CREATED_QUESTION,
        authedUser,
        id
    }
}

export function addAnswer(answer){
    return {
        type: ADD_ANSWER,
        answer
    }
}

export function handleGetUsers(){
    return (dispatch)=>{
        _getUsers()
        .then((users)=> dispatch(getUsers(users)))

    }
}