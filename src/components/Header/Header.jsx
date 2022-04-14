import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { HeaderAppBar, HeaderLogo, HeaderToolbar } from './styles';

const Header = () => {
   return (
      <HeaderAppBar position="fixed">
         <HeaderToolbar>
            <div>
               <HeaderLogo>Logo</HeaderLogo>
            </div>
            <Link to="/team">
               <Button color="inherit">Team</Button>
            </Link>
            <Link to="/matches">
               <Button color="inherit">Matches</Button>
            </Link>
            <Link to="/dashboard">
               <Button color="inherit">Dashboard</Button>
            </Link>
         </HeaderToolbar>
      </HeaderAppBar>
   );
};

export default Header;
