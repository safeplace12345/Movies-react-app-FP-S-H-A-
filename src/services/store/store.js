import { composeWithDevTools } from "redux-devtools-extension";
import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
const middleWare = [
    thunk,
    logger
] 
const reducer = (state = [], action) => {
    switch (action.type){
        case 'Add' :
            return [...state,'Add']
            default :
            return [...state]
    }
};

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleWare)));
