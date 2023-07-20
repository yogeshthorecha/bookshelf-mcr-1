import './App.css';
import { Routes,Route } from 'react-router';
import { LandingPage } from './pages/LandingPage';
import { SearchPage } from './pages/SearchPage';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
    </div>
  );
}

export default App;
