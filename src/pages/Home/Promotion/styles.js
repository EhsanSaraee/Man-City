import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';
import jerseyImg from '../../../resources/images/jersey.jpg';

// index
export const PromotionWrapper = styled.section`
   padding: 30px 0px 130px 0px;
   background: #ffffff;

   input {
      background: #fafafa;
      border: 1px solid #e9e9e9;
      font-size: 17px;
      padding: 8px;
      border-radius: 3px;
      font-family: Roboto;
      font-weight: 300;
      width: 100%;
      box-sizing: border-box;
   }
`;

export const Container = styled.div`
   width: 1024px;
   margin: 0 auto;
`;

// animation
export const PromotionAnimation = styled.section`
   display: flex;
   padding: 80px 0px 30px 0px;
`;

export const Left = styled.div`
   text-transform: uppercase;
   text-transform: uppercase;
   font-size: 150px;
   font-family: 'Righteous', cursive;
   flex-grow: 1;
   color: #d5ebfd;
   line-height: 135px;

   span {
      display: block;
   }
`;
export const Right = styled.div`
   line-height: 135px;

   div {
      width: 280px;
      height: 280px;
      background-size: contain !important;
   }
`;

export const Jersey = styled.div`
   background: url(${jerseyImg}) no-repeat;
`;

// enroll
export const EnrollWrapper = styled.section`
   text-align: center;
`;

export const EnrollTitle = styled.div`
   font-family: 'Righteous', cursive;
   font-size: 26px;
   color: #4e4e4e;
`;

export const EnrollInput = styled.div`
   width: 330px;
   margin: 0 auto;
   padding: 10px 0px;
`;

export const ErrorLabel = styled.div`
   color: #f44336;
   font-weight: 600;
   margin: 10px 0px;
`;

export const EnrollDescL = styled.div`
   font-weight: 300;
   font-size: 12px;
   width: 271px;
   margin: 0 auto;
   padding: 10px 0px;
`;

export const Progress = styled(CircularProgress)`
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 20px;
`;
