import '@/components/styles/globals.css'
import style from '../styles/app.module.css';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"; //bootstrap icons
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';
import store from '../redux/store';
import { Provider } from 'react-redux';


export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ParallaxProvider>
        <div className={style.container}>
          <Navbar/>
          <hr />
          <Component {...pageProps} />
          <Footer/>        
        </div>
      </ParallaxProvider>      
    </Provider>
  )
}
