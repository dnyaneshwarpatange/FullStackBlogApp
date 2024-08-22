import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/authContext';

const MyPosts = () => {
    const { user } = useAuth();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:3000/api/posts/user/${user._id}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => setPosts(data))
                .catch(error => console.error('Error fetching posts:', error));
        }
    }, [user]);

    const handleDelete = (postId) => {
        fetch(`http://localhost:3000/api/posts/${postId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(() => setPosts(posts.filter(post => post._id !== postId)))
        .catch(error => console.error('Error deleting post:', error));
    };

    const handleEdit = (postId) => {
        // Navigate to edit page or open edit modal
    };

    return (
        <div className="max-w-3xl mx-auto p-6 shadow-md rounded-lg text-white">
            <h1 className="text-2xl font-semibold mb-4">My Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post._id} className="mb-4">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p>{post.description}</p>
                        <button onClick={() => handleEdit(post._id)} className="mr-2">Edit</button>
                        <button onClick={() => handleDelete(post._id)} className="text-red-500">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyPosts;
