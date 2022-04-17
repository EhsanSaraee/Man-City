import styled from 'styled-components';

export const TagContainer = styled.section`
   background: ${({ bck }) => (bck ? bck : '#ffffff')};
   font-size: ${({ size }) => (size ? size : '15px')};
   color: ${({ color }) => (color ? color : '#000000')};
   padding: '5px 10px';
   display: 'inline-block';
   font-family: 'Righteous';
`;
