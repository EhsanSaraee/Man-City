import { Navigate } from 'react-router-dom';
import { app } from '../firebase';

const AuthGuard = (Component) => () => {
   const user = app.auth().currentUser;

   return user ? <Component /> : <Navigate to="/" />;
};

export default AuthGuard;
