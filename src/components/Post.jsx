import styles from './Post.module.css';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/TalyssonG.png" />
                    <div className={styles.authorInfo}>
                        <strong>Talysson Gadêlha</strong>
                        <span>Front-End developer</span>
                    </div>
                </div>

                <time title="20 de Abril ás 21:30h" dateTime="2023-04-29 21:26:30">Publicado há 1h</time>
            </header>

        <div className={styles.content}>
                    <p> Fala galeraa 👋 </p>

                    <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                    <p> 👉{' '}<a href=""> jane.design/doctorcare</a></p>

                    <p> 
                        
                        <a href=""> #novoprojeto </a>{' '}
                        
                       <a href=""> #nlw </a>{' '}
                        
                        <a href="">#rocketseat</a>
                        
                    </p>
            
        </div>

    <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>


        <textarea
            placeholder='Deixe um comentário'
        />

        <footer> 
          <button type='submit'>Publicar</button>
        </footer>
    </form>

        </article>
    )
}