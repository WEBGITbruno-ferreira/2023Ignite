import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

/* tipando  funcao  e props geral */
interface Content {
  content : string,
  onDeleteComment : (comment : string) => void
}


export function Comment({content, onDeleteComment}: Content ) {

const [likeCount, setLikeCount] = useState (0)


function handleDeleteComment() {

  onDeleteComment(content)
}

/*
function handleLikeComment(){
  
  setLikeCount(likeCount + 1)
}*/

/* Closures no react 
 cuidado ao tentar chamar o setLikeCount, diversas vezes seguidas. 

 setLikeCount(likes + 1)
 setLikeCount(likes + 1)
 setLikeCount(likes + 1)

 por baixo dos panos dentro deste constes a variavel do state , é sempre zero, portanto o valor será sempre o antigo 

 solução 

 const newLikeCount = likeCount + 1  // a Var like cont é atualizada no mesmo contexto / momento

 setLikeCount(newLikeCount)

 ou 

 setLikeCount((valorMaisrecenteDoState)=>{
   return valorMaisrecenteDoState + 1
 })




*/

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



