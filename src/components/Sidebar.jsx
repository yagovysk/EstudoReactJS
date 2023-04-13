import styles from './Sidebar.module.css';

import fundoa from '../assets/fundo1.jpg';

import fotoperfil from '../assets/profile1.jpg'

export function Sidebar() {
    return(
        <aside className={ styles.sidebar }>

            <img className={styles.fundo1} src={ fundoa } />

            <div className={styles.profile}>
                <img className={styles.profile1} src={fotoperfil} alt="fotoprofile" />
            <strong>Yago Cerqueira Regis</strong>
            <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
        
    );
}