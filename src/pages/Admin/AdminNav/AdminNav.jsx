import { Link } from 'react-router-dom';
import { logoutHandler } from '../../../utils/tools';
import { AdminNavLink } from './styles';

const AdminNav = () => {
   const links = [
      {
         title: 'Matches',
         linkTo: '/admin_matches',
      },
      {
         title: 'Players',
         linkTo: '/admin_players',
      },
   ];

   return (
      <>
         {links.map(({ linkTo, title }) => (
            <Link to={linkTo} key={title}>
               <AdminNavLink button>{title}</AdminNavLink>
            </Link>
         ))}
         <AdminNavLink button onClick={logoutHandler}>
            Logout
         </AdminNavLink>
      </>
   );
};

export default AdminNav;
