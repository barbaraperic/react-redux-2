import { applyMiddleware, createStore } from 'redux';
import rootReducers from './reducers'
import thunk from "redux-thunk";


const logger = (store) => (next) => (action) => {
  console.group(action.type)
  console.log('The action is', action)
  const result = next(action)
  console.log('the next state', store.getState())
  console.groupEnd()
  return result
}

const middleware = [thunk, logger]

// const thunk = (store) => (next) => (action) => {
//   if (typeof action === 'function') {
//     return action(store.dispatch)
//   } else {
//     return next(action)
//   }
// }

const store = createStore(rootReducers, applyMiddleware(...middleware))

export default store

console.log('store',)



// const createStore = (reducer) => {
//   let state

//   let listeners = []

//   const getState = () => state

//   const subscribe = (listener) => {
//     listeners.push(listener)
//     return () => {
//       listeners.filter(l => l !== listener)
//     }
//   }

//   const dispatch = (action) => {
//     state = reducer(state, action)
//     listeners.forEach(listener => listener())
//   }

//   return {
//     getState,
//     subscribe,
//     dispatch
//   }

// }

// export const store = createStore()