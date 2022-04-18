import styled from 'styled-components';
import stripes from '../../../resources/images/stripes.png';

export const HomeMeetPlayers = styled.section`
   background: #ffffff url(${stripes});
`;

export const Container = styled.section`
   width: 1024px;
   margin: 0 auto;
`;

export const HomeMeetPlayersWrapper = styled.section`
   padding-bottom: 100px;
   min-height: 600px;
`;

export const HomeCardWrapper = styled.div`
   position: relative;
   float: left;
   width: 630px;
   min-height: 600px;
`;

export const HomeTextWrapper = styled.section`
   float: right;
   width: 390px;
   margin-top: 70px;
`;
