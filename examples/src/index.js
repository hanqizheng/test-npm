import React from 'react'
import { render } from 'react-dom'
import MyTestNpm from '../../src/index'

const App = () => {
  return (
    <MyTestNpm />
  )
}

render(<App />, document.getElementById('root'));