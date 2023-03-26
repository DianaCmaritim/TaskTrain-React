import React from 'react';
import styled from 'styled-components';

const MainContentContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const MainContent = ({ page }) => {
  if (page === 'home') {
    return (
      <MainContentContainer>
        <Title>Home</Title>
        <p>Welcome to the dashboard!</p>
      </MainContentContainer>
    );
  } else if (page === 'todos') {
    return (
      <MainContentContainer>
        <Title>Todos</Title>
        <p>Todo list goes here.</p>
      </MainContentContainer>
    );
  } else {
    return (
      <MainContentContainer>
        <Title>404</Title>
        <p>Page not found.</p>
      </MainContentContainer>
    );
  }
};

export default MainContent;
