import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './styles/variable.css';

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
                path="/projects"
                element= { <Projects />}
              />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
