import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar src="https://github.com/WEBGITbruno-ferreira.png"/> 
          <div className={styles.authorInfo}>
            <strong> Bruno Ferreira</strong>
            <span> Web Dev</span>
          </div>
        </div>

        <time title="2022-05-11 as 8h:00m" dateTime="2022-05-11 08:00:00">
          {" "}
          Públicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p>
          {" "}
          Sed error numquam rerum magnam iusto hic, tempore, voluptatem maxime
          sint nisi eius sit blanditiis porro esse deserunt mollitia eos id
          omnis?
        </p>
        <p>
          {" "}
          <a href="https://github.com/WEBGITbruno-ferreira">
            {" "}
            https://github.com/WEBGITbruno-ferreira{" "}
          </a>{" "}
        </p>
        <p>
          {" "}
          <a href=""> #rocket </a> <a href="">#teste </a> <a href="">#teste </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        {" "}
        <strong> Deixe seu feedback</strong>
        <textarea placeholder="deixe um comentário"/>
        <footer> 
        <button type="submit">  Publicar</button>
        </footer>
      </form>


      <div className={styles.commentList}>
         <Comment/>
         <Comment/>
         <Comment/>
      </div>
    </article>
  );
}
