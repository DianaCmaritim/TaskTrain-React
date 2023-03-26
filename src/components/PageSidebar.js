
import styled from 'styled-components';
import TodoForm from './CreateTodo';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  width: 100%;
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

const PageSidebar = () => {
  return (
    <SidebarContainer>
      <SidebarList>
        <SidebarItem>
          <SidebarLink href="#">Create Todo</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink href="/TodoForm">Todos</SidebarLink>
          <SidebarList>
            <SidebarItem>
              <SidebarLink href="#">View All</SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="#">Create</SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="#">Delete</SidebarLink>
            </SidebarItem>
          </SidebarList>
        </SidebarItem>
      </SidebarList>
      <p>Want to Logout?</p>
    </SidebarContainer>
  );
};

export default PageSidebar;
