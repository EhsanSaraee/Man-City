import { Slide } from 'react-awesome-reveal';
import styled from 'styled-components';

export const HomeMatchesWrapper = styled.section`
   background: #98c5e9;
   margin-top: 9px;
   padding: 50px 0px;
   min-height: 800px;
`;

export const Container = styled.div`
   width: 1024px;
   margin: 0 auto;
`;

export const MatchItem = styled(Slide)`
   width: 50%;
   margin: 35px 0px;
`;

export const Wrapper = styled.div`
   padding-right: 30px;
`;

export const HomeMatches = styled.div`
   flex-wrap: wrap;
   display: flex;
   margin-top: 60px;
`;
