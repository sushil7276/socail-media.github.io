import Home from '../pages/Home';
import Navbar from './Navbar'
import Loader from './Loader'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Register from '../pages/Register';
import { useAuth } from '../hooks/Index';

const page404 = () => {
  return <h1>404</h1>
}

function App() {


  const auth = useAuth();

  if (auth.loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={page404()} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
