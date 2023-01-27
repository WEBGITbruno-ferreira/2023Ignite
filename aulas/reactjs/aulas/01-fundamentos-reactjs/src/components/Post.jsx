import styles from './Post.module.css'

export function Post () {
  return (

    <article className={styles.Post}> 
      <header>
          <div className={styles.author}> 
            <img className={styles.avatar} src="https://github.com/WEBGITbruno-ferreira.png"  alt="" />
            <div className={styles.authorInfo}> 
                <strong> Bruno Ferreira</strong>
                <span> Web Dev</span>
            </div>
          </div>

          <time title="2022-05-11 as 8h:00m" dateTime='2022-05-11 08:00:00'> Públicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
         <p> Sed error numquam rerum magnam iusto hic, tempore, voluptatem maxime sint nisi eius sit blanditiis porro esse deserunt mollitia eos id omnis?</p>
         <p> <a href="https://github.com/WEBGITbruno-ferreira"> https://github.com/WEBGITbruno-ferreira </a> </p>
         <p> <a href=""> #rocket #teste </a></p>
      </div>
    </article>
  )
}

