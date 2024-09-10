import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './styles/variable.css';
import Experience from './pages/Experience';
import ArtPage from './pages/ArtPage';

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
              <Route
                path="/experience"
                element= { <Experience />}
              />
              <Route
                path="/art"
                element= { <ArtPage />}
              />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
