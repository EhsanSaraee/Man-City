import { AdminNav } from '../pages';
import { AdminContainer, AdminLeftNav, AdminRight } from './styles';

const AdminLayout = ({ children, title }) => {
   return (
      <AdminContainer>
         <AdminLeftNav>
            <AdminNav />
         </AdminLeftNav>
         <AdminRight>
            <h2>{title}</h2>
            {children}
         </AdminRight>
      </AdminContainer>
   );
};

export default AdminLayout;
