import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Test from './components/common/Test'
import Home from './pages/Home';
import Analytics from './pages/Analytics';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Analytics />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App
