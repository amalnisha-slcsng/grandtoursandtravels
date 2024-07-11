import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Services from './routes/Services';
import Contact from './routes/Contact';
import CallIcon from './components/CallIcon'; // Import the CallIcon component
import SocialMediaIcons from './components/SocialMediaIcons'; // Import SocialMediaIcons component
import TravelPlan from './routes/TravelPlan'; // Replace with your actual component path




function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/about" element={ <About/>}/>
        <Route path="/services" element={ <Services/>}/>
        <Route path="/contact" element={ <Contact/>}/>   
        <Route path="/travel-plan" element={<TravelPlan />} />

      </Routes>
      <div>
      <SocialMediaIcons /> 

      </div>

          <CallIcon /> 


    </div>
  );
}

export default App;
