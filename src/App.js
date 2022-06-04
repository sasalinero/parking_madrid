
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import ParkingsList from "./components/ParkingsList";
import AgendaList from "./components/AgendaList";
import Weather from "./components/Weather";
import Footer from "./components/Footer";

const App = (props) => {
  
  return (
            <div>  
              
            <BrowserRouter> 
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/weather" element={<Weather/>}/>
                <Route path="/parkingsList" element={<ParkingsList />}/>
                <Route path="/agenda" element={<AgendaList/>}/>
              </Routes>
               <Footer/>
                      
             </BrowserRouter> 
            </div>
  );
};

export default App;
