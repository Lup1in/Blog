import blogFetch from '../axios/config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './NewPost.css'

const newPost = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const createPost = async (e) => {
        e.preventDefault();

        const post = {title, body, userId: 1};
        await blogFetch.post("/posts", { 
            body: post,
        });
        navigate("/");
    };

    return (
        <div className="new-post">
            <h2>New Post</h2>
            <form onSubmit={(e) => createPost(e)}>
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="type your title" id="title" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="body">Content</label>
                    <textarea name="body" placeholder="type your content" id="body" onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
                <input type="submit" value="create post" className="btn" />
            </form>
        </div>)
}

export default newPost