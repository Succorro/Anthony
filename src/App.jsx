import Footer from './Footer'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Navigation from './Navigation'
import Services from './Services'

function App() {

  return (
    <div>
      <Navigation/>
        <Routes>
          <Route path="/services" element={<Services />}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
