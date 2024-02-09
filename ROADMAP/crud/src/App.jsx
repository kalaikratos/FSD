import { useState,useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(response.data);
  };
  useEffect(() => {
    getPosts();
  }, []);


  return (
    <div className="App">
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(post);
      }}>
        <input type="text" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} />
        <input type="text" value={post.body} onChange={(e) => setPost({ ...post, body: e.target.value })} />
        <button type="submit">Add</button>
      </form>
      {/* <h1>Posts</h1>
      {posts.map(post=>(
        <div key={post.id}>
          <h3>Title:{post.title}</h3>
          <p>Body:{post.body}</p>
        </div>
      ))} */}

    </div>
  )
}

export default App
