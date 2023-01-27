import styles from './Header.module.css' //importando usando modules, requer o nome


export function Header() {
  return (
    <header className={styles.header}> 
    <strong >  FIGMA</strong>
    </header>
  )


}