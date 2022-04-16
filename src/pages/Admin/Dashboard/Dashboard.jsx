import AdminLayout from '../../../HOC/AdminLayout';
import { UserDashboard } from './styles';

const Dashboard = () => {
   return (
      <AdminLayout title="Admin Dashboard">
         <UserDashboard>This is your dashboard</UserDashboard>
      </AdminLayout>
   );
};

export default Dashboard;
