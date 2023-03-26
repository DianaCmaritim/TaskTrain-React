// import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import Login from './components/login.component'
// import SignUp from './components/signup.component'
// import Dashboard from './components/Dashboard';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//           <div className="container">
//             <Link className="navbar-brand" to={'/sign-in'}>
//               Dee
//             </Link>
//             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item">
//                   <Link className="nav-link" to={'/sign-in'}>
//                     Login
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={'/sign-up'}>
//                     Sign up
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//         <div className="auth-wrapper">
//           <div className="auth-inner">
//             <Routes>
//               <Route exact path="/" element={<Login />} />
//               <Route path="/sign-in" element={<Login />} />
//               <Route path="/sign-up" element={<SignUp />} />
//               <Route path="/dashboard" element={<Dashboard />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   )
// }
// export default App

import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login.component';
import SignUp from './components/signup.component';
import Dashboard from './components/Dashboard';
import Page from './components/Page';
import TodoForm from './components/CreateTodo';
//import Header from './Header';
import Welcome from './components/Welcome'


function App() {
  return (
    <Router>
      <div className="App">


            <Routes>
              <Route exact path="/" element={<Welcome />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/page" element={<Page />} />
              <Route path="/todoform" element={<TodoForm />} />
            </Routes>

      </div>
    </Router>
  );
}

export default App;
