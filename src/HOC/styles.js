import styled from 'styled-components';

export const AdminContainer = styled.section`
   margin-top: 96px;
   display: flex;

   h2 {
      margin: 0px 0px 50px 0px;
      border-bottom: 1px solid #dbdbdb;
      color: #414141;
      font-size: 40px;
   }
`;

export const AdminLeftNav = styled.div`
   min-height: 100vh;
   background: #282828;
   border-right: 2px solid #01285e;
`;

export const AdminRight = styled.div`
   flex-grow: 1;
   padding: 20px;
`;
