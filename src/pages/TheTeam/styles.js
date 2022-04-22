import styled from 'styled-components';
import stripes from '../../resources/images/stripes.png';

export const TheTeamContainer = styled.section`
   margin-top: 96px;
   padding: 20px;
   background-size: 5px 5px !important;
   min-height: 100vh;
   background: #ffffff url(${stripes});
`;

export const Progress = styled.div`
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const TeamCategoryWrapper = styled.section`
   min-height: 600px;
`;

export const TeamTitle = styled.div`
   font-size: 90px;
   margin: 30px 0px;
   font-family: 'Righteous', cursive;
   color: #d5ebfe;
`;

export const TeamCards = styled.div`
   display: flex;
   flex-wrap: wrap;
`;

export const TeamItem = styled.div`
   margin-right: 20px;
   margin-bottom: 20px;
`;
