import { useEffect, useState } from 'react';
import { getPosts } from '../api/Index';
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

const page404 = () => {
  return <h1>404</h1>
}

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();

      if (response.success) {
        setPosts(response.data.posts);
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home posts={posts} />} />
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
