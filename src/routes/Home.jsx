import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Home.css'


const Home = () => {
    const [posts, setPosts] = useState([]);
    const getPosts = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            const data = response.data;
            setPosts(data);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getPosts();
    }, [])

    return ( <div>
        <h1>Last Posts</h1>
        {posts.length === 0 ? <p>Loading</p> :(
            posts.map((post) => (
                <div className="post" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link to={'/posts/${post.id}'} className="btn">See More</Link>
                </div>
            ))
        )}
    </div>
    )

};

export default Home