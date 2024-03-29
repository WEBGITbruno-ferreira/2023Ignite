import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";

import ptBR from "date-fns/locale/pt-BR";
import { LineSegment } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

// Necessita   author : { avatar_url: "", name:"", role: ""}
// publishedAt : Data
// contentPost : string
/**/

//estado. variaveis que o componente deve monitorar

interface Author {
  name: string,
  role: string,
  avatarUrl: string
}

// indo alem na tipagem, definindo opçoes possiveis para string
interface Content {
   type: 'Paragraph' | 'Link',
   content: string
}

interface PostProps {
   author : Author, 
   publishedAt : Date,
   content : Content[]

}

export function Post({ author, publishedAt, content }: PostProps) {

  const [comments, setComments] = useState(['post primeiro'])

  const [newCommentText, setnewCommentText] = useState('')


  const publisedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'as' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const TimePastPublished = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent ) {
    event.preventDefault()
  //  console.log(event.target.comment.value)
   // const newCommentText = e.value
    setComments([...comments, newCommentText])

    setnewCommentText('')
  }

  function handleNewCommentChange (event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
    setnewCommentText(event.target.value)

    
  }

  function handleNewCommentInvalid ( event : InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }


  function  deleteComment(commentToDelete : string) {
      console.log(`Deletar Comment ${commentToDelete}`)

      const newListComment = comments.filter ((newComm)=> {
        return  newComm !== commentToDelete
      })


      setComments(newListComment)
  }



  //clean code
  const isNewCommentEmpty = newCommentText.length===0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publisedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {TimePastPublished}
        </time>
      </header>

      <div className={styles.content}>
      
        {content.map((line, index) => {
          
          if (line.type === "Paragraph") {
            return <p key={line.content}> {line.content} </p>;
          } else if (line.type === "Link") {
            return (
              <p key={index}>
                <a href="#">{line.content} </a>
              </p>
            );
          }
        })}
      </div>

      <form 
      onSubmit={ handleCreateNewComment}
      className={styles.commentForm}>
        {" "}
        <strong> Deixe seu feedback</strong>
        <textarea 
          name="comment" 
          placeholder="deixe um comentário" 
          value={newCommentText}
          required={true}
          onInvalid={handleNewCommentInvalid}
          onChange={handleNewCommentChange}/>
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}> Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map( (comm, index) => {
         return < Comment key={comm} content={comm} onDeleteComment={deleteComment} />
        }) }
      </div>
    </article>
  );
}
