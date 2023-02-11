
import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import styles from './InputNewTask.module.css' //importando usando modules, requer o nome



export function InputNewTask ({tasksList, onAddTasks}) {

  const [newTaskAdd, setNewTaskAdd] = useState('')

  function handleAddNewTask() {

      let commentInsert =  newTaskAdd
      let newID = tasksList.length
   
      let newTaskList = [...tasksList, {id : newID+1, isSelected: false,
        taskMsg: commentInsert}]
      onAddTasks(newTaskList)
  }

  function handleChangeComment () {
    setNewTaskAdd(event.target.value)
  }


  return (

      <div className={styles.inputNewTask} > 
      <input  onBlur={handleChangeComment} placeholder='Adicione uma nova tarefa' type="text" />
      <button onClick={handleAddNewTask} title="Adicionar tarefa">
             Criar  <PlusCircle size={16} />
      </button>
      </div>
  
  )
}