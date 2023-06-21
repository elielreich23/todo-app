import './App.scss';
import "./components/FontAwesome";
import { BrowserRouter } from 'react-router-dom';
import Navigation from "./navigation";


function App() {
  return (
    <>
      <BrowserRouter>
      <div className="app">
        <Navigation />
      </div> 
      </BrowserRouter>
    </>
  );
}

export default App;
