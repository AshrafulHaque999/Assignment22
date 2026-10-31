import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About';
import UserDetails from './pages/UserDetails';

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/users" element={<Users />} />

          <Route path="/users/:id" element={<UserDetails />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;