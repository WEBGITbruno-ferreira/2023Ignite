import styles from './Header.module.css' //importando usando modules, requer o nome

import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className={styles.header}> 
    <img src={igniteLogo} alt="Logo Ignite"/>
    <strong >  Ignite Feed</strong>
    </header>
  )


}