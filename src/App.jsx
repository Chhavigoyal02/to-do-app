import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import TodoApp from './TodoApp.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
    <TodoApp />
  </div>
  )
}

export default App
