import Posts from './components/Posts';
import style from '../styles/app.module.css';
import Hero from './components/Hero';
import { Parallax } from 'react-scroll-parallax';

export default function Home() {

  return (
    <Parallax speed={-10}>
      <div className={style.hero}>
        <Hero/>
      </div>

      <div className={style.posts}>
        <Posts/>
      </div>
      
    </Parallax>
  )
}
