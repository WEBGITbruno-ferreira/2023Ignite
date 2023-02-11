import styles from "./TaskList.module.css"; //importando usando modules, requer o nome

import clipBoard from "../assets/ClipBoard.svg";
import Trash from "../assets/Trash.svg";
import { useState } from "react";

export function TaskList({tasksList}) {
  
  console.log(tasksList)
  let tasks = [...tasksList];

  const [tasksRender, setTasksRender ] = useState (tasks)


  
  return (
    <>
      <div className={styles.counterTasks}>
        <div className={styles.textCounter}>
          {" "}
          <p> Tarefas Criadas</p> <span> 0</span>{" "}
        </div>
        <div className={styles.textCounter}>
          {" "}
          <p> Concluidas</p> <span> 0 </span>{" "}
        </div>
      </div>

      {/*  renderTask(tasks) */}

      <div className={styles.taskToDo}>
      {tasksRender.map( (taskItem)=> {
        return (
        
        <div key={taskItem.id}>
        <input  checked={taskItem.isSelected} type="checkbox" />
        <p> {taskItem.isSelected} </p>
        <p> {taskItem.taskMsg} </p>
        <img src={Trash}  width="30" height="30" alt="" />
        </div>
        
        )
      }) }


      </div>

   
    </>
  );
}






function renderTask () {
  

  
  if ( tasks.length === 0) {
  
    return (<>
      <div className={styles.emptyTaskList}>
      <img src={clipBoard} width="56" alt="" />
      <p>Você ainda não tem tarefas cadastradas </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
      </>)
     
  

  } else {

    tasksRender.map( (itemTask) => {

      })

  }

  return 

}
