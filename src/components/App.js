
import { useEffect, useState } from 'react';
import { getPosts } from '../api/Index';
import Home from '../pages/Home';
import Loader from './Loader'

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
      <Home posts={posts} />
    </div>
  );
}



export default App;
