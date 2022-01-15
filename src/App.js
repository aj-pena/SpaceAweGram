
import './style.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/pages/Gallery';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {

  return (
    <div>
      <Header/>
      <Gallery/>
      <Footer/>        
    </div>
  );
};

