import styled from 'styled-components';

export const PlayerCardWrapper = styled.section`
   background: #ffffff;
   border: 1px solid #ececec;
   width: 300px;
   padding: 10px 10px 20px 10px;
   font-family: 'Righteous';
`;

export const PlayerCardThumb = styled.div`
   border: 1px solid #eeeeee;
   width: 100%;
   height: 250px;
   background-repeat: no-repeat !important;
   background-position: center !important;
   background-size: contain !important;
`;

export const PlayerCardInfo = styled.div`
   position: relative;
`;

export const PlayerCardNumber = styled.div`
   color: #d6ecfe;
   font-size: 185px;
   text-align: right;
   line-height: 160px;
`;

export const PlayerCardName = styled.div`
   position: absolute;
   bottom: 0px;

   span {
      display: block;
      font-size: 25px;
      color: #0d1831;
   }
`;
