import Nave from '@/Components/Nave';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App({ Component, pageProps }) {
  return(
    <>
    <Nave/>
    <Component {...pageProps} /> 
    
     </>
    )
}
