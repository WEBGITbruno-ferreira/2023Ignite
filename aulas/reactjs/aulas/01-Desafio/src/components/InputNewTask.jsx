
import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import styles from './InputNewTask.module.css' //importando usando modules, requer o nome
import uuid from 'react-native-uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function InputNewTask ({tasksList, onAddTasks}) {

  const [newTaskAdd, setNewTaskAdd] = useState('')

  function handleAddNewTask() {
      event.preventDefault()

      if (newTaskAdd === '')
      { 
        
        toast.info("Adicione a descrição da tarefa !", {theme: "dark"})
        return 
      }
   
      let commentInsert =  newTaskAdd
    
   
      let newTaskList = [...tasksList, {id : uuid.v4(), isSelected: false,
        taskMsg: commentInsert}]
      onAddTasks(newTaskList)

      setNewTaskAdd('')
  }

  function handleChangeTasks () {
    event.target.setCustomValidity('Esse campo é obrigatório')
    setNewTaskAdd(event.target.value)
  }




  return (

      <form action="submit">
      <div className={styles.inputNewTask} > 
      <input   onChange={handleChangeTasks} placeholder='Adicione uma nova tarefa' type="text"  value={newTaskAdd}/>
      <button  type="submit" onClick={handleAddNewTask} title="Adicionar tarefa">
             Criar  <PlusCircle size={16} />
      </button>
      <ToastContainer />
      </div>
      </form>
  
  )
}