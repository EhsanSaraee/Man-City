import { Navigate } from 'react-router-dom';
import { app } from '../firebase';

const AuthGuard = ({ children }) => {
   const user = app.auth().currentUser;

   return user ? children : <Navigate to="/" />;
};

export default AuthGuard;
