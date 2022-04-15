import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.section`
   width: 1024px;
   margin: 0 auto;
`;

export const SignInWrapper = styled.div`
   margin-top: 96px;
   padding: 20px;
   min-height: 70vh;
   text-align: center;

   form {
      width: 350px;
      margin: 0 auto;

      button {
         width: 100%;
         padding: 10px;
      }
   }

   input {
      background: #fafafa;
      border: 1px solid #e9e9e9;
      font-size: 17px;
      padding: 8px;
      border-radius: 3px;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      width: 100%;
      box-sizing: border-box;
   }

   h2 {
      font-family: 'Righteous', cursive;
      color: #98c6e9;
      font-size: 50px;
   }
`;

export const ErrorLabel = styled.div`
   color: #f44336;
   font-weight: 600;
   margin: 10px 0px;
`;

export const Progress = styled(CircularProgress)`
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
`;
