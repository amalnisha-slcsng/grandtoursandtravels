import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Services from './routes/Services';
import Contact from './routes/Contact';
import CallIcon from './components/CallIcon'; // Import the CallIcon component
import SocialMediaIcons from './components/SocialMediaIcons'; // Import SocialMediaIcons component
import TravelPlan from './routes/TravelPlan'; // Replace with your actual component path
import Trip from './routes/Trip';
import Kutralam from './components/Kutralam'; // Import Kutralam component
import Kanniyakumari from './components/Kanniyakumari';
import Kerala from './components/Kerala';
import Madurai from './components/Madurai';
import Chennai from './components/Chennai';
import Coimbatore from './components/Coimbatore';
import Salem from './components/Salem';
import Rameshwaram from './components/Rameshwaram';
import Tiruchirappalli from './components/Tiruchirappalli';
import Trivandrum from './components/Trivandrum';
import Palani from './components/Palani';
import Tirunelveli from './components/Tirunelveli';
import Thanjavur from './components/Thanjavur';
import Trichy from './components/Trichy';
import Dindigul from './components/Dindigul';
import Kovalam from './components/Kovalam';
import Sollavanthan from './components/Sollavanthan';
import Alaganalur from './components/Alaganalur';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/travel-plan" element={<TravelPlan />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/kutralam" element={<Kutralam />} />
        <Route path="/kanniyakumari" element={<Kanniyakumari />} />
        <Route path="/kerala" element={<Kerala />} />
        <Route path="/madurai" element={<Madurai />} />
        <Route path="/chennai" element={<Chennai />} />
        <Route path="/coimbatore" element={<Coimbatore />} />
        <Route path="/salem" element={<Salem />} />
        <Route path="/rameshwaram" element={<Rameshwaram />} />
        <Route path="/tiruchirappalli" element={<Tiruchirappalli />} />
        <Route path="/trivandrum" element={<Trivandrum />} />
        <Route path="/palani" element={<Palani />} />
        <Route path="/tirunelveli" element={<Tirunelveli />} />
        <Route path="/thanjavur" element={<Thanjavur />} />
        <Route path="/trichy" element={<Trichy />} />
        <Route path="/dindigul" element={<Dindigul />} />
        <Route path="/kovalam" element={<Kovalam />} />
        <Route path="/sollavanthan" element={<Sollavanthan />} />
        <Route path="/alaganalur" element={<Alaganalur />} />
      </Routes>
      <div>
        <SocialMediaIcons />
      </div>
      <CallIcon />
    </div>
  );
}

export default App;
