// import React from "react";
import Navbar from "../components/Navbar";
import "../assets/style/profile.css";
import React, { useState, useEffect  } from "react";
import Header from "../components/header";

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchedUser = {
            name: "Sam Ochu",
            email: "samochu@example.com",
        };
        setTimeout(() => setUser(fetchedUser), 1000);
    }, []);

    return (
           <div className="home-page">
             <div className="container">
                <Header />
                <div className="top"></div>
                <div className="profile-container">
                    <div className="profile-card">
                        <div className="profile">
                        {user ? (
                            <div>
                                <h2 className="profile-title">{user.name}</h2>
                                <p className="profile-email">{user.email}</p>
                                <div className="button-group">
                                    <button className="edit-button">Edit Profile</button>
                                    <a href="login"><button className="logout-button">Log Out</button></a>
                                </div>
                            </div>
                        ) : (
                            <div className="loading">
                                <div className="spinner"></div>
                                <p>Loading profile...</p>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    );
};

// const Profile = () => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const fetchedUser = {
//             name: "John Doe",
//             username: "@johndoe",
//             bio: "🎬 Content Creator | 🎵 Music Lover | 🚀 Dreamer",
//             profile: "http://localhost:5173/src/assets/teacher.jpg",
//             posts: 56,
//             followers: 1200,
//             following: 180,
//         };
//         setTimeout(() => setUser(fetchedUser), 1000);
//     }, []);

//     return (
//         <div className="home-page">
//             <div className="container">
//                 <h1 className="heading">PINK</h1>
//                 <div className="top"></div>
//                 <div className="home-page">
//                 {user ? (
//                     <div className="profile">
//                         <div className="container">
//                             <div className="pic">
//                                 <img src={ user.profile } alt="" />
//                             </div>
//                         </div>
//                     </div>
//                     ) : (
//                     <p>Loading...</p>
//                 )}
//                 </div> 
//             </div>
//             <div className="chin"></div>
//             <Navbar />
//         </div>
//     );
// };
export default Profile;