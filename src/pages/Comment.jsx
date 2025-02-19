import React from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import "../assets/style/home.css";
import Header from "../components/header";

const Comment = () => {
    const { user } = useAuth(); // Get user from AuthContext
    const posts = [
        {
            id: 1,
            body: "This is the content of post 1.",
            author: "Author 1",
            authorImage: "http://localhost:5173/src/assets/teacher.jpg",
            postImage: "http://localhost:5173/src/assets/blog-1.jpg",
        },
        {
            id: 2,
            body: "This is the content of post 2.",
            author: "Author 2",
            authorImage: "http://localhost:5173/src/assets/teacher.jpg",
            postImage: "http://localhost:5173/src/assets/blog-2.jpg",
        },
        {
            id: 3,
            body: "This is the content of post 3.",
            author: "Author 3",
            authorImage: "http://localhost:5173/src/assets/teacher.jpg",
            postImage: "http://localhost:5173/src/assets/blog-2.jpg",
        },
    ];

    return (
        <div className="home-page">
            <div className="container">
                <Header />
                <div className="top"></div>
                {/* <div className="posts">
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
                                    <p className="post-date">{new Date().toLocaleDateString()}</p> 
                                </div>
                            </div>
                            { post.postImage ? (
                            <img src={post.postImage} alt="Post" className="post-image" />
                            ) : ( <p></p>) }
                            <p className="post-body">{post.body}</p>
                            { user ? (
                                <p className="post-date">Please login to like and comment.</p>
                            ) : (
                            <div className="interaction-buttons">
                                <button className="like-button" title="like">
                                    <i className="fas fa-thumbs-up"></i>
                                </button>
                                
                                <button className="comment-button" title="Secret Comment">
                                    <i className="fas fa-comment-alt"></i>
                                </button>
                            </div>
                            )}
                        </div>
                    ))}
                </div> */}
                <div className="chin"></div>
                <Navbar />
            </div>
        </div>
    );
};

export default Comment;