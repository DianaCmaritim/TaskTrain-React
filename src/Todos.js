import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Todos from './Todos';

const Dashboard = () => {
  const [user, setUser] = useState({ name: 'John Doe', email: 'johndoe@example.com' });
  const navigate = useNavigate();

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
          <Sidebar />
          <Switch>
            <Route path="/todos" component={Todos} />
            <Route path="/">
              <h1>Welcome!</h1>
              <p>You are now logged in!</p>
              <button onClick={handleLogout}>Logout</button>
            </Route>
          </Switch>
        </>
      ) : (
        <p>You are not logged in!</p>
      )}
    </div>
  );
};

export default Dashboard;
