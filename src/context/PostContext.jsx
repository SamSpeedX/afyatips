// import { createContext, useState, useEffect, useContext } from "react"; // Ongeza useContext hapa
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";

// const AuthContext = createContext();

// export const useAuth = () => {
//     return useContext(AuthContext);  // Sasa inatumia useContext kutoka React
// };

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("token"));

//   useEffect(() => {
//     if (token) {
//       try {
//         const decoded = jwtDecode(token);
//         setUser(decoded);
//       } catch (error) {
//         logout();
//       }
//     }
//   }, [token]);

//   const login = async (email, password) => {
//     try {
//       const { data } = await axios.post("http://localhost:8080/login", { email, password });
//       localStorage.setItem("token", data.token);
//       setToken(data.token);
//       setUser(jwtDecode(data.token));
//     } catch (error) {
//       throw new Error(error.response?.data?.message || "Login failed");
//     }
//   };

//   const createpost = async (name, message, media) => {
//     try {
//       const { data } = await axios.post("http://localhost:8080/register", { name, message, media });
//       localStorage.setItem("token", data.token);
//       setToken(data.token);
//       setUser(jwtDecode(data.token));
//     } catch (error) {
//       throw new Error(error.response?.data?.message || "Registration failed");
//     }
//   };

//   const updateProfile = async (name, email) => {
//     try {
//       const { data } = await axios.put("http://localhost:8080/profile", { name, email }, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setUser({ ...user, name: data.name, email: data.email });
//     } catch (error) {
//       throw new Error(error.response?.data?.message || "Profile update failed");
//     }
//   };

//   const resetPassword = async (email) => {
//     try {
//       await axios.post("http://localhost:8080/reset-password", { email });
//     } catch (error) {
//       throw new Error(error.response?.data?.message || "Password reset failed");
//     }
//   };

//   const allpost = async () => {
//     try {
//         await axios.get("http://localhost:8080/allpost");
//     } catch (error) {
//         throw new Error(error.response?.data.message || "No post yet!");
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken(null);
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, createpost, updateProfile, resetPassword, allpost, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;











// // // src/context/AuthContext.jsx
// // import { createContext, useState, useEffect } from "react";
// // import axios from "axios";
// // import { jwtDecode } from "jwt-decode";

// // const AuthContext = createContext();

// // export const useAuth = () => {
// //     return useContext(AuthContext);
// // };

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const [token, setToken] = useState(localStorage.getItem("token"));

// //   useEffect(() => {
// //     if (token) {
// //       try {
// //         const decoded = jwtDecode(token);
// //         setUser(decoded);
// //       } catch (error) {
// //         logout();
// //       }
// //     }
// //   }, [token]);

// //   const login = async (email, password) => {
// //     try {
// //       const { data } = await axios.post("https://api.kibalanga.com/login", { email, password });
// //       localStorage.setItem("token", data.token);
// //       setToken(data.token);
// //       setUser(jwtDecode(data.token));
// //     } catch (error) {
// //       throw new Error(error.response?.data?.message || "Login failed");
// //     }
// //   };

// //   const register = async (name, email, password) => {
// //     try {
// //       const { data } = await axios.post("https://api.kibalanga.com/register", { name, email, password });
// //       localStorage.setItem("token", data.token);
// //       setToken(data.token);
// //       setUser(jwtDecode(data.token));
// //     } catch (error) {
// //       throw new Error(error.response?.data?.message || "Registration failed");
// //     }
// //   };

// //   const updateProfile = async (name, email) => {
// //     try {
// //       const { data } = await axios.put("https://api.kibalanga.com/profile", { name, email }, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       setUser({ ...user, name: data.name, email: data.email });
// //     } catch (error) {
// //       throw new Error(error.response?.data?.message || "Profile update failed");
// //     }
// //   };

// //   const resetPassword = async (email) => {
// //     try {
// //       await axios.post("https://api.kibalanga.com/reset-password", { email });
// //     } catch (error) {
// //       throw new Error(error.response?.data?.message || "Password reset failed");
// //     }
// //   };

// //   const logout = () => {
// //     localStorage.removeItem("token");
// //     setToken(null);
// //     setUser(null);
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, token, login, register, updateProfile, resetPassword, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export default AuthContext;
