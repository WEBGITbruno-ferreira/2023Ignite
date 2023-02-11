import styles from './Header.module.css' //importando usando modules, requer o nome

import  logo  from '../assets/Logo.svg'


export function Header () {
  
  return (

    <header className={styles.header}>  
      <img src={logo} alt="Logo todo" />
    </header> 


  )
}