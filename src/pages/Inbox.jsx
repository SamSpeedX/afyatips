import React from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import Header from "../components/header";

const Inbox = () => {
    const { user } = useAuth(); // Get user from AuthContext
    const posts = [
        {
            id: 1,
            body: "This is the content of post 1.",
            author: "Author 1",
            authorImage: "http://localhost:5173/src/assets/teacher.jpg",
        },
        {
            id: 2,
            body: "This is the content of post 2.",
            author: "Author 2",
            authorImage: "http://localhost:5173/src/assets/teacher.jpg",
        },
        {
            id: 3,
            body: "This is the content of post 3.",
            author: "Author 3",
            authorImage: "http://localhost:5173/src/assets/teacher.jpg",
        },
    ];

    return (
        <div className="home-page">
            <div className="container">
                <Header />
                <div className="top"></div>
                <div className="posts">
                    {posts.map((post) => (
                        <div key={post.id} className="post-card">
                            <div className="post-header">
                                <img
                                    src={post.authorImage}
                                    alt={post.author}
                                    className="author-image"
                                />
                                <div className="author-info">
                                    <p className="author-name">{post.author}</p>
                                    {/* <p className="post-date">{new Date().toLocaleDateString()}</p>  */}
                                </div>
                            </div>
                            <p className="post-body">{post.body}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="chin"></div>
            <Navbar />
        </div>
    );
};

export default Inbox;