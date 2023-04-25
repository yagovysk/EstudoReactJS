import styles from './Comment.module.css';

import perfildog from '../assets/perfildog.jpg'
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={ perfildog } />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                <header>
                <div className={ styles.authorAndTime }>
                    <strong>Gato Galáctico</strong>
                    <time title='14 de Abril ás 11:52h' dateTime='2023-04-20 13:00'>Cerca de 30 minutos atrás</time>
                </div>

                <button title='Deletar comentário'>
                <Trash size={24} />
                </button>
                </header>

                <p>Muito bom Yago, parabéns!</p>

                </div>

                <footer>
                    <button>
                     <ThumbsUp />
                        Curtir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}