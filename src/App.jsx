import React from 'react';
import { AuthProvider } from './context/AuthContext';  // Import AuthProvider
import Root from './routes/Routes';

const App = () => {
  return (
    <AuthProvider>
      <Root />
    </AuthProvider>
  );
};

export default App;





// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Profile from './pages/Profile';
// import HomePage from './pages/HomePage';  // Import HomePage component

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<HomePage />} />  {/* Home page route */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/profile" element={<Profile />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
