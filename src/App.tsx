
import { Header } from './components/Header';
import { Post, PostType } from './components/Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';



const posts: PostType[] = [
  {
      id: 1,
      author: {
      avatarUrl: 'https://github.com/vitorcamara2.png',
      name: 'Vitor Eduardo',
      role: 'CTO @ Rocketseat'
    },
    content: [
      
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare</a>'},
    ],
      publishedAt: new Date('2024-07-12 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @ Rocketseat'
    },
    content: [
      
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare</a>'},
    ],
      publishedAt: new Date('2024-07-25 20:00:00'),
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
          return (
          <Post 
             post={post}
          />
        )
        })}
      </main>
    </div>
    </div>
  )
}

