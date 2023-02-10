import { useState } from 'react'
import { Header } from './components/Header';
import { InputNewTask } from './components/InputNewTask';
import styles from "./components/App.module.css"
import "./global.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <div className={styles.wrapper}> 
    <InputNewTask />
    <p> Hello </p>

    </div>

    </>
  )
}

export default App
