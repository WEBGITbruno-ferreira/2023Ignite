import styles from './SideBar.module.css'
import { PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar'

export function SideBar() {
  return (
    <aside className={styles.sidebar}> 
   
    <img 
    className={styles.cover} 
    src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" 
    />
    
    <div className={styles.profile}> 
     <Avatar src="https://github.com/WEBGITbruno-ferreira.png"/> 
      <strong>Bruno F.</strong> 
      <span> Web Dev</span>
    </div>

    <footer>
      <a href='#'> 
      <PencilLine size={20} />
      Editar seu Perfil  </a>
    </footer>
     </aside>
  )
}