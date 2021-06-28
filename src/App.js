import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountriesList from "./CountriesList.jsx"
import Side from "./side.jsx"
import Navbar from "./Navbar";
 
function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Navbar/>
  <Route path="/countries" component={CountriesList} />

  <Route path="/countries/:cca3" component={Side} />
  </BrowserRouter>

    </div>
  );
}

export default App;
