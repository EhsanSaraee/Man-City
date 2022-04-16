import { Navigate } from 'react-router-dom';
import { app } from '../firebase';
import { Dashboard } from '../pages';

const AuthGuard = (Component) => () => {
   const user = app.auth().currentUser;

   return user ? <Component /> : <Navigate to="/" />;
};

const Admin = AuthGuard(Dashboard);

export default Admin;
