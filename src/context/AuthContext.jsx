import { createContext, useState, useEffect, useContext } from "react"; // Ongeza useContext hapa
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);  // Sasa inatumia useContext kutoka React
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        logout();
      }
    }
  }, [token]);

  const url = "http://localhost:8080/";

  const login = async (email, password) => {
    try {
      const { data } = await axios.post('http://localhost:8080/in.php', { email, password });
  
      if (data && data.token) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        setUser(jwtDecode(data.token));
        return data;
      } else {
        console.error('Unexpected response:', data);
        throw new Error("Login failed");
      }
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.error('No response received:', error.request);
      } else {
        // Something else went wrong setting up the request
        console.error('Error:', error.message);
      }
      throw new Error("Login failed");
    }
  };
  
  
// const login = async (email, password) => {
//   try {
//     const response = await axios.post('http://localhost:8080/in.php', { email, password });

//     if (response.status === 200 && response.data) {
//       localStorage.setItem("token", data.token);
//       setToken(data.token);
//       setUser(jwtDecode(data.token));
//       return response.data;
//     } else {
//       console.error('Unexpected response:', response);
//       throw new Error("Login failed");
//     }
//   } catch (error) {
//     if (error.response) {
//       // Server responded with a status code outside 2xx
//       console.error('Error response:', error.response.data);
//     } else if (error.request) {
//       // Request was made but no response received
//       console.error('No response received:', error.request);
//     } else {
//       // Something else went wrong setting up the request
//       console.error('Error:', error.message);
//     }
//     throw new Error("Login failed");
//   }
// };



  const register = async (name, email, password) => {
    try {
      const { data } = await axios.post(`${url}reg.php`, { name, email, password });
      localStorage.setItem("token", data.token);
      setToken(data.token);
      setUser(jwtDecode(data.token));
    } catch (error) {
      throw new Error(error.response?.data?.message || "Registration failed");
    }
  };

  const updateProfile = async (name, email) => {
    try {
      const { data } = await axios.put(`${url}`, { name, email }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser({ ...user, name: data.name, email: data.email });
    } catch (error) {
      throw new Error(error.response?.data?.message || "Profile update failed");
    }
  };

  const resetPassword = async (email) => {
    try {
      await axios.post(`${url}resetpassword`, { email });
    } catch (error) {
      throw new Error(error.response?.data?.message || "Password reset failed");
    }
  };

  const profile = async (token) => {
    try {
      const { data } = await axios.get(`${url}profile?token=${token}`);
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "error");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, updateProfile, resetPassword, profile, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;











// // src/context/AuthContext.jsx
// import { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";

// const AuthContext = createContext();

// export const useAuth = () => {
//     return useContext(AuthContext);
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
//       const { data } = await axios.post("https://api.kibalanga.com/login", { email, password });
//       localStorage.setItem("token", data.token);
//       setToken(data.token);
//       setUser(jwtDecode(data.token));
//     } catch (error) {
//       throw new Error(error.response?.data?.message || "Login failed");
//     }
//   };

//   const register = async (name, email, password) => {
//     try {
//       const { data } = await axios.post("https://api.kibalanga.com/register", { name, email, password });
//       localStorage.setItem("token", data.token);
//       setToken(data.token);
//       setUser(jwtDecode(data.token));
//     } catch (error) {
//       throw new Error(error.response?.data?.message || "Registration failed");
//     }
//   };

//   const updateProfile = async (name, email) => {
//     try {
//       const { data } = await axios.put("https://api.kibalanga.com/profile", { name, email }, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setUser({ ...user, name: data.name, email: data.email });
//     } catch (error) {
//       throw new Error(error.response?.data?.message || "Profile update failed");
//     }
//   };

//   const resetPassword = async (email) => {
//     try {
//       await axios.post("https://api.kibalanga.com/reset-password", { email });
//     } catch (error) {
//       throw new Error(error.response?.data?.message || "Password reset failed");
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken(null);
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, register, updateProfile, resetPassword, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
