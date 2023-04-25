import { format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';


import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';


export function Post({ author, publishedAt }) {
    const publishedDateFormatted = format(
        publishedAt,
        "d 'de' LLLL 'às' HH:mm'h'",
        {
          locale: ptBR,
        }
      );
      
    return(
        <article className={styles.post}>
            <header className={styles.cabeca}>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src={author.avatarUrl} />
                <div className={styles.authorinfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                    </div>
                </div>

            <time title={ publishedDateFormatted } dateTime='2023-04-20 13:00:00'>
                
            </time>
            </header>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}