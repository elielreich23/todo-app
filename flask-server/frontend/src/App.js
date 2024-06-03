import './App.scss';
import "./components/FontAwesome";
import { BrowserRouter } from 'react-router-dom';
import Navigation from "./navigation";
import Login from './components/Login';


function App() {
  return (
    <>
      <BrowserRouter>
      <div className="app">
        <Navigation />
      </div>
      </BrowserRouter>
      <Login/>
    </>
  );
}

export default App;
