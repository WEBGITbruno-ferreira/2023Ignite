import styles from './TaskList.module.css' //importando usando modules, requer o nome

import  logo  from '../assets/Logo.svg'


export function Header () {
  return (

    <content className={styles.header}>  
      <img src={logo} alt="Logo todo" />
    </content> 
  )
}