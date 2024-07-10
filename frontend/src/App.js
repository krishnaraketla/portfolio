import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ParticlesComponent from './components/ParticlesComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div className="pages">
            <Routes>
              <Route
                path="/"
                element= { <Home />}
              />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
