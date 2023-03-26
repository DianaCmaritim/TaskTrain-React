import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import TodoForm from './TodoForm';
// import MainContent from './MainContent';

//import '../dashboard.css'; // Import the CSS file

const DashboardUser = () => {
  const [user, setUser] = useState({ name: 'John Doe', email: 'johndoe@example.com' });
//   const navigate = useNavigate();

  const handleLogout = () => {
    axios.delete('http://localhost:3000/users/logout')
      .then(response => {
        console.log(response);
        setUser(null);
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      {user ? (
        <>

          <h1>ONBOARD THE TASK TRAIN!</h1>
          <p>You are now logged in!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>You are not logged in!</p>
      )}
    </div>
  );
};

export default DashboardUser;