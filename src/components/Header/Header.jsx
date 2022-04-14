import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { HeaderAppBar, HeaderLogo, HeaderToolbar } from './styles';

const Header = () => {
   return (
      <HeaderAppBar position="fixed">
         <HeaderToolbar>
            <div>
               <HeaderLogo>
                  <Logo width="70px" height="70px" link linkTo="/" />
               </HeaderLogo>
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
