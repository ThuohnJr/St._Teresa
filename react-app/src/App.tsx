import { useState } from 'react'
import Header from './components/Header'
 import { BrowserRouter, Route, Switch } from "react-router-dom";
 import Title from './components/Title.tsx'
 import Index from "./components/Index.tsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Title />
<Index />
    </>
  )
}

export default App
