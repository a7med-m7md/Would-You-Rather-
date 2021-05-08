import { createStore, applyMiddleware} from 'redux'
import combineReducers from '../reducers/combineReducers'
import reduxThunk from 'redux-thunk'
import logger from '../middlewares/logger'

const store = createStore(combineReducers, applyMiddleware(reduxThunk, logger))
store.subscribe(()=> console.log(store.getState()))
export default store