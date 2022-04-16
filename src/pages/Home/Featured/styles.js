import styled from 'styled-components';

export const FeaturedWrapper = styled.section`
   margin: 0 auto;
   width: 1280px;
   margin-top: 90px;
   height: 800px;
   overflow: hidden;
`;

export const StripeWrapper = styled.div`
   width: 230px;
   height: 1200px;
   position: absolute;
`;

export const FeaturedStripes = styled.div`
   position: relative;
`;

export const FeaturedNumber = styled.div`
   font-size: 270px;
   color: #ffffff;
   transform: translate(260px, 170px);
   position: absolute;
`;

export const FeaturedFirst = styled.div`
   position: absolute;
   background: #0e1731;
   color: #ffffff;
   font-size: 92px;
   text-transform: uppercase;
   padding: 0px 20px;
`;

export const FeaturedPlayer = styled.div`
   width: 500px;
   height: 500px;
   background-size: contain !important;
   background-repeat: no-repeat !important;
   position: absolute;
`;

export const FeaturedText = styled.div`
   position: relative;
   font-family: 'Righteous', cursive;
`;
