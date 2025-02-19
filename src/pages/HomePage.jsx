import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import "../assets/style/home.css";
import Header from "../components/header";
// import { redirect } from "react-router-dom";

const HomePage = () => {
    const { user } = useAuth(); // Get user from AuthContext
    // const { commenti, setComent} = useState();

    const posts = [
        {
            id: 1,
            titlt: "Matumizi ya Sigara",
            body: "Watu wengi wakekuwa wakijihusisha na uvutaji wa sigara bila kujua madhara ya uvutaji wa sigara katika miili yao, inagawa baadhi yao wanafahamu lakini wanapuudhia",
            author: "Dr Emma Mgidha",
            authorImage: "http://localhost:5173/src/assets/teacher.jpg",
            postImage: "http://localhost:5173/src/assets/blog-1.jpg",
        },
        {
            id: 2,
            titlt: "title",
            body: "This is the content of post 2.",
            author: "Dr Anna Stephano",
            authorImage: "http://localhost:5173/src/assets/teacher.jpg",
            postImage: "http://localhost:5173/src/assets/blog-2.jpg",
        },
        {
            id: 3,
            titlt: "title",
            body: "This is the content of post 3.",
            author: "Dr Asia Mussa",
            authorImage: "http://localhost:5173/src/assets/teacher.jpg",
            postImage: "http://localhost:5173/src/assets/blog-2.jpg",
        },
    ];

    const url = 'post/';
    // function like(e) {
    //     const post
    // }

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
                                    <p className="post-date">{new Date().toLocaleDateString()}</p> 
                                </div>
                            </div>
                            <h3>{post.titlt}</h3>
                            { post.postImage ? (
                            <img src={post.postImage} alt="Post" className="post-image" />
                            ) : ( <p></p>) }
                            <p className="post-body1">{post.body}</p> 
                            <a href={post.titlt}><p className="readmore">Read more</p></a>
                            { user ? (
                                <p className="post-date">Please login to like and comment.</p>
                            ) : (
                            <div className="interaction-buttons">
                                <button className="like-button" title="like">
                                    <i className="fas fa-thumbs-up"></i>
                                </button>
                                <a href="comment">
                                <button className="comment-button" title="Secret Comment">
                                    <i className="fas fa-comment-alt"></i>
                                </button>
                                </a>
                            </div>
                            )}
                        </div>
                    ))}
                </div>
                
                <Navbar />
            </div>
        </div>
    );
};

export default HomePage;