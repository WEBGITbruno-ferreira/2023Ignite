
import { PlusCircle } from "phosphor-react";
import styles from './InputNewTask.module.css' //importando usando modules, requer o nome


function handleAddNewTask() {

}

export function InputNewTask () {
  return (

      <div className={styles.inputNewTask} > 
      <input  placeholder='Adicione uma nova tarefa' type="text" />
      <button onClick={handleAddNewTask} title="Adicionar tarefa">
             Criar  <PlusCircle size={16} />
      </button>
      </div>
  
  )
}