import { useState } from 'react'
import { Header } from './components/Header';
import { InputNewTask } from './components/InputNewTask';
import { TaskList } from './components/TaskList';
import styles from "./components/App.module.css"
import "./global.css";
import uuid from 'react-native-uuid';


let tasks = [
  { 
    id : uuid.v4(),
    isSelected: true,
    taskMsg:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, voluptates, voluptatem provident iure sed inventore aperiam sequi unde accusantium, ",
  },
  {
    id : uuid.v4(),
    isSelected: false,
    taskMsg:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, voluptates, voluptatem provident iure sed inventore aperiam sequi unde accusantium, ",
  },
  { 
    id : uuid.v4(),
    isSelected: true,
    taskMsg:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, voluptates, voluptatem provident iure sed inventore aperiam sequi unde accusantium, ",
  },
];


function App() {
  const [count, setCount] = useState(0)

  const [listTasks, setListTasks] = useState (tasks)

  

  return (
    <>
    <Header/>
    <div className={styles.wrapper}> 
    <InputNewTask  tasksList ={listTasks} onAddTasks = {setListTasks}/>
    <TaskList  tasksList ={listTasks} onChangeTasks = {setListTasks} />



    </div>

    </>
  )
}

export default App
