

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import React, { useState } from 'react';
import axios from 'axios';

import TodoForm from './CreateTodo';
import EditTodoForm from './EditTodos';
import Todos from './DeleteTodo'
import TodoList from './ViewTodos';


const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Sidebar = styled.div`
  width: 200px;
  background-color: #333;
  color: white;
`;

const SidebarLink = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  padding: 10px;
  &:hover {
    background-color: #444;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const Dashboard = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const handleSidebarLinkClick = (e) => {
    e.preventDefault();
    setCurrentView(e.target.getAttribute('href').replace('/', ''));
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <><div className="auth-wrapper">
            <h1>Welcome to the dashboard!</h1>
          <div className="auth-inner">
                {user ? (
                  <div>
                    <h1>ONBOARD THE TASK TRAIN!</h1>
                    <p>You are now logged in!</p>
                    <p>Do you Want to <button onClick={handleLogout}>Logout</button></p>
                </div>
                ) : (
                  <p>You are not logged in!</p>
                )} </div>


             </div>
              </>
        );

      case 'createtodo':
        return (
          <>

            <TodoForm />
          </>
        );

        case 'viewtodos':
        return (
          <>

            < TodoList/>
          </>
        );

        case 'edittodos':
        return (
          <>

            <EditTodoForm />
          </>
        );

        case 'deletetodo':
        return (
          <>

          <Todos/>

          </>
        );
      default:
        return <h1>Invalid view</h1>;
        // case 'viewtodos':
        //   return <h1>View Todos</h1>;
        //   case 'edittodos':
        //   return <h1>Edit Todos</h1>;
    }
  };


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
    <Container>
      <Sidebar>
        <SidebarLink href="/dashboard" onClick={handleSidebarLinkClick}>
          Dashboard
        </SidebarLink>
        <SidebarLink href="/createtodo" onClick={handleSidebarLinkClick}>
          Create Todo
        </SidebarLink>
        <SidebarLink href="/viewtodos" onClick={handleSidebarLinkClick}>
          View Todos
        </SidebarLink>
        <SidebarLink href="/edittodos" onClick={handleSidebarLinkClick}>
          Edit Todos
        </SidebarLink>
        <Sidebar href = "deletetodo" onClick={handleSidebarLinkClick}>
          Delete Todos
        </Sidebar>
      </Sidebar>
      <MainContent>{renderView()}</MainContent>
    </Container>
  );
};

export default Dashboard;







