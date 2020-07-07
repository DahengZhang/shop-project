import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import shopCar from './reducers/shopCar'

const loggerMiddleware = createLogger()

export default createStore(
    combineReducers({
        shopCar
    }),
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)
