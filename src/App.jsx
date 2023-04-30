import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css';

import './global.css'
export function App() {

  return (
    <div>

    <Header /> 

     <div className={styles.wrapper}>
        <Sidebar />

     <main>
       <Post
          author="Diego Fernandes"
          content="Sou programador a 5 anos e fiz um post sobre"
      />
       <Post
          author="Talysson Gadêlha"
          content="Um novo post muito legal sobre design"
      />
     </main>
     </div>
    </div>    
  )
}

