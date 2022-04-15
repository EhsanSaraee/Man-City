import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer, Header } from './components';
import AuthGuard from './HOC/AuthGuard';
import { Dashboard, Home, SignIn } from './pages';

const UserApp = ({ user }) => {
   const Admin = AuthGuard(Dashboard);

   return (
      <BrowserRouter>
         <ToastContainer autoClose={3000} />
         <Header user={user} />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign_in" element={<SignIn user={user} />} />
            <Route path="/dashboard" element={<Admin />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
};

export default UserApp;
