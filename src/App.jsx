import { Header } from './components/Header';
import { Post } from './Post';
import './global.css'
export function App() {

  return (
    <div>

    <Header /> 

    <Post 
      author="Talysson"  
      content="Lorem impsosjd  dsbdhshdsbhd "
      /> 
    <Post 
         author="Diego"  
         content="Lorem impsosjd  dsbdhshdsbhd "
         /> 
    <Post /> 
    </div>    
  )
}

