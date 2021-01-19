import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Todos from './components/Todos'
import Goals from './components/Goals'
import Loading from './components/Loading'

import { handleInitialData } from './actions/fetchAPI'

function App() {

  const { todos, goals, loading } = useSelector(state => state)

  console.log(typeof todos)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleInitialData())
  })

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <Todos todos={todos} />
      <Goals goals={goals}/>
    </div>
  );
}

export default App;
