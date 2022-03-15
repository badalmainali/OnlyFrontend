import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Footer from './components/Footer';

import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import Mainpage from './screens/Mainpage';

import Contactus from './components/Contactus';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path='/booking' exact element={<Homescreen />} />
       
          <Route path='/register' exact element={<RegisterScreen />} />
          <Route path='/login' exact element={<LoginScreen />}/>
          <Route path='/' exact element={<Mainpage />} />
          <Route path='/contact' exact element={<Contactus/>} />
          <Route path='/aboutus' exact element={<AboutUs/>} />
          
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;