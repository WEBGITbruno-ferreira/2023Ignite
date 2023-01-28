import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";

import ptBR from "date-fns/locale/pt-BR";
import { LineSegment } from "phosphor-react";

// Necessita   author : { avatar_url: "", name:"", role: ""}
// publishedAt : Data
// contentPost : string
/**/

export function Post({ author, publishedAt, content }) {
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
      
        {content.map((line) => {

          if (line.type === "Paragraph") {
            return <p> {line.content} </p>;
          } else if (line.type === "Link") {
            return (
              <p>
                <a href="#">{line.content} </a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm}>
        {" "}
        <strong> Deixe seu feedback</strong>
        <textarea placeholder="deixe um comentário" />
        <footer>
          <button type="submit"> Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
