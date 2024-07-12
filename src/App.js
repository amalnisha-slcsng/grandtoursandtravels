import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Services from './routes/Services';
import Contact from './routes/Contact';
import CallIcon from './components/CallIcon'; // Import the CallIcon component
import SocialMediaIcons from './components/SocialMediaIcons'; // Import SocialMediaIcons component
import TravelPlan from './routes/TravelPlan'; // Replace with your actual component path
import Trip from './components/Trip';
import Kutralam from './components/Kutralam'; // Import Kutralam component
import Kanniyakumari from './components/Kanniyakumari';
import Kerala from './components/Kerala';



function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/about" element={ <About/>}/>
        <Route path="/services" element={ <Services/>}/>
        <Route path="/contact" element={ <Contact/>}/>   
        <Route path="/travel-plan" element={<TravelPlan />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/kutralam" element={<Kutralam />} /> 
        <Route path="/kanniyakumari" element={<Kanniyakumari />} />
        <Route path="/kerala" element={<Kerala />} />

      </Routes>
      <div>
      <SocialMediaIcons /> 

      </div>

          <CallIcon /> 


    </div>
  );
}

export default App;
