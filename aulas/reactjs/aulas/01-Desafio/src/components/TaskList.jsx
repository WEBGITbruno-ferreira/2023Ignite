import styles from "./TaskList.module.css"; //importando usando modules, requer o nome

import clipBoard from "../assets/ClipBoard.svg";
import Trash from "../assets/Trash.svg";
import { useState } from "react";

export function TaskList({tasksList, onChangeTasks }) {
  
  
function handleChangeSelect (itemId){

  let newTaskList = [...tasksList]

  console.log(newTaskList)
  let indexToChange = newTaskList.findIndex((eachTask, index)=> eachTask.id === itemId )
  
  newTaskList[indexToChange].isSelected = !newTaskList[indexToChange].isSelected

  onChangeTasks (newTaskList)
  

}

function handleDeleteSelected (itemId){

 // let newTaskList = [...tasksList]

  //console.log(newTaskList)
  let newTaskList = tasksList.filter((eachTask, index)=> eachTask.id !== itemId )
  

  onChangeTasks (newTaskList)
  

}



function renderTask (listToRender) {
  
  if ( listToRender.length === 0) {
  
    return (<>
      <div className={styles.emptyTaskList}>
      <img src={clipBoard} width="56" alt="" />
      <p>Você ainda não tem tarefas cadastradas </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
      </>)
     
  

  } else {
    return (
    <div className={styles.taskToDo}>
    {listToRender.map( (taskItem)=> {
      return (
      
      <div key={taskItem.id}>
      <input  onChange={ () => handleChangeSelect(taskItem.id)}className="buttonCheck" checked={taskItem.isSelected} type="checkbox" />
     
      <p className="textToDo" > {taskItem.taskMsg} </p>
      
      <button onClick={() =>handleDeleteSelected(taskItem.id)}>
      <img className="iconTrash" src={Trash}  width="30" height="30" alt="" />
      </button>
     
      </div>
      
      )
    }) }


    </div>
    )
  }

  
}

 
  return (
    <>
      <div className={styles.counterTasks}>
        <div className={styles.textCounter}>
          {" "}
          <p> Tarefas Criadas</p> <span> {tasksList.length}</span>{" "}
        </div>
        <div className={styles.textCounter}>
          {" "}
          <p> Concluidas</p> <span> {  tasksList.filter( (item)=> item.isSelected === true).length}
          </span>{" "}
        </div>
      </div>

      {renderTask(tasksList)}

  
    </>
  );
}

