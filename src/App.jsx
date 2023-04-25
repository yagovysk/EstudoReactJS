import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';


import './global.css';
import styles from './App.module.css';


// author: { avatar-url:"", name:"", role:"" }
//publishedAt: Date
//content: String
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/yagovysk.png',
      name: 'Yago Cerqueira Regis',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraaa!'},      
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu github. é um projeto que fiz no NLW Ignite, onde estudo e aprimoro minhas habilidades com react.'}, 
      { type: 'link', content: '➔ https://github.com/yagovysk' }, 
      
    ],
    publishedAt: new Date('2023-04-20 13:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl:'https://img.freepik.com/fotos-premium/gato-no-espaco_828075-2.jpg',
      name: 'Gato Espacial',
      role: 'Back-end Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraaa!'},      
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu github. é um projeto que fiz no NLW Ignite, onde estudo e aprimoro minhas habilidades com react.'}, 
      { type: 'link', content: '➔ https://github.com/yagovysk' }, 
      
    ],
    publishedAt: new Date('2023-04-20 15:02:05'),
  },
];


export function App() {
  return (
   <div>
    <Header />
    <div className={styles.wrapper}>
    <Sidebar />
    <main>
      {posts.map(post => {
        return(
          <Post
           author={post.author}
           content={post.content}
           publishedAt={post.publishedAt}
          />
        )
      })}
      </main>
    </div>
    
   </div>
  )
}


