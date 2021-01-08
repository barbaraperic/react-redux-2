import { createStore } from 'redux';
import rootReducers from './reducers'

const store = createStore(rootReducers)

export default store

console.log('store', store)



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