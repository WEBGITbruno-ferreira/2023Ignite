import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment () {

  return (
  
  <div className={styles.comment}>
        <a href="https://github.com/WEBGITbruno-ferreira"> </a>
     
     <div className={styles.commentBox}>
          <div className={styles.commentContent}></div>
          <header>
              <div className={styles.authorAndTime}></div>
              <strong>Bruno Ferreira</strong> 
              <time title="2022-05-11 as 8h:00m" dateTime="2022-05-11 08:00:00"> Cerca de 1h atrás </time>

          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>

     </div>

     <button title='Deletar'>
        <Trash size={20}/> 
     </button>

     <footer>
     <button>
        <ThumbsUp size={20}/> 
        Aplaudir <span> 20 </span>
     </button>

     </footer>

  </div> 
  
  )
}