import styled from 'styled-components';

import PageSidebar from './PageSidebar';
// import TodoForm from './TodoForm';

const PageContainer = styled.div`
  margin-left: 200px;
  padding: 20px;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Page = () => {
  return (
    <>
      <PageSidebar />
      <PageContainer>
        <PageTitle>My Page</PageTitle>
        <p>This is my page content.</p>
      </PageContainer>
    </>
  );
};

export default Page;
