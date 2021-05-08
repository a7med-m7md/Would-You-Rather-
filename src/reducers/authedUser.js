import { AUTHED_USER } from '../actions/authedUser'

const initialState = null

export default function authedUser(state=initialState, action){
    switch(action.type){
        case AUTHED_USER:
            return action.id
        default:
            return state
    }
}