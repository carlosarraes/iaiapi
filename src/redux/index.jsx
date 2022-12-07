import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import apiReducer from './reducers'

const store = createStore(apiReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
