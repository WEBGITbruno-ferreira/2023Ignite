import { useState } from 'react'
import { Header } from './components/Header';
import { InputNewTask } from './components/InputNewTask';
import { TaskList } from './components/TaskList';
import styles from "./components/App.module.css"
import "./global.css";


let tasks = [
  { 
    id : 1,
    isSelected: true,
    taskMsg:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, voluptates, voluptatem provident iure sed inventore aperiam sequi unde accusantium, ",
  },
  {
    id : 2,
    isSelected: false,
    taskMsg:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, voluptates, voluptatem provident iure sed inventore aperiam sequi unde accusantium, ",
  },
  { 
    id : 3,
    isSelected: true,
    taskMsg:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, voluptates, voluptatem provident iure sed inventore aperiam sequi unde accusantium, ",
  },
];


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <div className={styles.wrapper}> 
    <InputNewTask />
    <TaskList  tasksList ={tasks}/>



    </div>

    </>
  )
}

export default App
