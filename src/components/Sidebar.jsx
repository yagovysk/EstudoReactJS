import styles from './Sidebar.module.css';

import fundoa from '../assets/fundo1.jpg';

import fotoperfil from '../assets/profile1.jpg'

import { PencilLine } from 'phosphor-react'

import { Avatar } from './Avatar';

export function Sidebar() {
    return(
        <aside className={ styles.sidebar }>

            <img className={styles.fundo1} src={ fundoa } />

            <div className={styles.profile}>
            <Avatar hasBorder={true} src={ fotoperfil } />
            <strong>Yago Cerqueira Regis</strong>
            <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
        
    );
}