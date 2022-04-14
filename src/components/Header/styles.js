import { AppBar, Toolbar } from '@material-ui/core';
import styled from 'styled-components';

export const HeaderAppBar = styled(AppBar)`
   background-color: #98c5e9 !important;
   box-shadow: none;
   padding: 10px 0;
   border-bottom: 2px solid #00285e;
`;

export const HeaderToolbar = styled(Toolbar)`
   display: flex;

   div {
      flex-grow: 1;
   }
`;

export const HeaderLogo = styled.div``;
