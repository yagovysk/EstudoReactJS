import { Header } from './components/header';

import './global.css';

import { Post } from './Post.jsx';

import styles from './App.module.css'
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
   <div>
    <Header />
    <div className={styles.wrapper}>
    <Sidebar />
    <main>
      <Post 
    author='David Vasconcelos' 
    content='Oi' 
    />
    <Post 
    author='Vitória Barros'
    content='um post muito legal'
    />
      </main>
    </div>
    
   </div>
  )
}


