import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer, Header } from './components';
import Admin from './HOC/AuthGuard';
import { Home, SignIn } from './pages';

const UserApp = ({ user }) => {
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
