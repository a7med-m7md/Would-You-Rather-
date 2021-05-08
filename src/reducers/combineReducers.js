import { combineReducers } from 'redux'
import  questions  from './questions'
import  users  from './users'
import  authedUser  from './authedUser'
import { loadingBarReducer} from 'react-redux-loading'
import { LOG_OUT } from '../actions/shared'

const appReducer = combineReducers({
    questions,
    users,
    authedUser,
    loadingBar: loadingBarReducer
})

const rootReducer = (state, action)=>{
    if(action.type === LOG_OUT)
        return appReducer(undefined, action)
    return appReducer(state, action)
}
export default rootReducer