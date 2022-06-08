import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import ParkingsList from "./components/ParkingsList";
import AgendaList from "./components/AgendaList";
import PoolList from "./components/PoolList";
import Footer from "./components/Footer";


const App = (props) => {
  return (
    <div>
     
        <Routes>
           <Route path="/" element={<Landing />} />
          <Route path="/poolList" element={<PoolList />} />
          <Route path="/parkingsList" element={<ParkingsList />} />
          <Route path="/agenda" element={<AgendaList />} />
        </Routes>
        <Footer />
    </div>
  );
};

export default App;
