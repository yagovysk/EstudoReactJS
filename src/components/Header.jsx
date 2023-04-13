import styles from './Header.module.css';

import logo from '../assets/logoprojeto.png';

export function Header() {
    return(
       <header className={styles.header}>
        <img src={ logo } alt="logobuda" />
        <strong>Buda Feed</strong>
        </header>
  );
}