import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";



export function Comment({content, onDeleteComment}) {

const [likeCount, setLikeCount] = useState (0)


function handleDeleteComment() {

  onDeleteComment(content)
}

/*
function handleLikeComment(){
  
  setLikeCount(likeCount + 1)
}*/

  return (
    <div className={styles.comment}>
       <Avatar hasBorder={false} src="https://github.com/WEBGITbruno-ferreira.png"/> 
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Bruno Ferreira</strong>
              <time title="2022-05-11 as 8h:00m" dateTime="2022-05-11 08:00:00">
                {" "} Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar">
              <Trash size={24} />
            </button>
          </header>

          {/*<p>Muito bom Devon, parabéns!! 👏👏</p>*/}
          <p> {content}</p>
        </div>

        <footer>
          <button onClick={ () => setLikeCount(likeCount + 1)}>
            <ThumbsUp size={20} />
            Aplaudir <span> {likeCount} </span>
          </button>
        </footer>
      </div>
    </div>
  );
}
