// import styled from 'styled-components';

// import TodoForm from './TodoForm';

// const SidebarContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 200px;
//   background-color: #333;
//   color: white;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const SidebarList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 20px 0;
//   width: 100%;
// `;

// const SidebarItem = styled.li`
//   margin: 10px 0;
// `;

// const SidebarLink = styled.a`
//   color: white;
//   text-decoration: none;
//   display: block;
//   padding: 10px;
//   width: 100%;
//   text-align: center;

//   &:hover {
//     background-color: #444;
//   }
// `;

// const Sidebar = () => {
//   return (
//     <SidebarContainer>
//       <SidebarList>
//         <SidebarItem>
//           <SidebarLink href="/todoform">My Account</SidebarLink>
//         </SidebarItem>
//         <SidebarItem>
//           <SidebarLink href="#">Todos</SidebarLink>
//           <SidebarList>
//             <SidebarItem>
//               <SidebarLink href="#">View All</SidebarLink>
//             </SidebarItem>
//             <SidebarItem>
//               <SidebarLink href="#">Create</SidebarLink>
//             </SidebarItem>
//             <SidebarItem>
//               <SidebarLink href="#">Delete</SidebarLink>
//             </SidebarItem>
//           </SidebarList>
//         </SidebarItem>
//       </SidebarList>
//           <p>Want to Logout?</p>


//     </SidebarContainer>
//   );
// };

// export default Sidebar;



// import styled from 'styled-components';


// const SidebarContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 200px;
//   background-color: #333;
//   color: white;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const SidebarList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 20px 0;
//   width: 100%;
// `;

// const SidebarItem = styled.li`
//   margin: 10px 0;
// `;

// const SidebarLink = styled.a`
//   color: white;
//   text-decoration: none;
//   display: block;
//   padding: 10px;
//   width: 100%;
//   text-align: center;

//   &:hover {
//     background-color: #444;
//   }
// `;

// const Sidebar = () => {
//   return (
//     <SidebarContainer>
//       <SidebarList>
//         <SidebarItem>
//           <SidebarLink href="/">Dashboard</SidebarLink>
//         </SidebarItem>
//         <SidebarItem>
//           <SidebarLink href="/">Todos</SidebarLink>

//             <SidebarItem>
//               <SidebarLink href="#">View All</SidebarLink>
//             </SidebarItem>
//             <SidebarItem>
//               <SidebarLink href="/todoform">Create</SidebarLink>
//             </SidebarItem>
//             <SidebarItem>
//               <SidebarLink href="#">Delete</SidebarLink>
//             </SidebarItem>

//         </SidebarItem>
//       </SidebarList>
//       <p>Want to Logout?</p>
//     </SidebarContainer>
//   );
// };

// export default Sidebar;







import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 200px;
  height: 100%;
  background-color: #333;
  color: white;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

const SidebarItem = styled.li`
  margin: 10px 0;
`;

const SidebarLink = styled.a`
  color: white;
  text-decoration: none;
  display: block;
  padding: 10px;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: #444;
  }
`;

const Sidebar = ({ handleLinkClick }) => {
  return (
    <SidebarContainer>
      <SidebarList>
        <SidebarItem>
          <SidebarLink href="#" onClick={() => handleLinkClick('home')}>
            Home
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink href="#" onClick={() => handleLinkClick('todos')}>
            Todos
          </SidebarLink>
        </SidebarItem>
      </SidebarList>
    </SidebarContainer>
  );
};

export default Sidebar;
