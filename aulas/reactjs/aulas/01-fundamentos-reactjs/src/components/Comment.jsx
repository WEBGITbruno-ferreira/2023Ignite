import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment(props) {
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

            <button title="Deletar">
              <Trash size={24} />
            </button>
          </header>

          {/*<p>Muito bom Devon, parabéns!! 👏👏</p>*/}
          <p> {props.content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span> 20 </span>
          </button>
        </footer>
      </div>
    </div>
  );
}
