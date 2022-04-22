import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer, Header } from './components';
import AuthGuard from './Guards/AuthGuard';
import { Dashboard, Home, SignIn } from './pages';
import AddEditPlayers from './pages/Admin/Players/AddEditPlayers';
import AdminPlayers from './pages/Admin/Players/AdminPlayers';
import TheTeam from './pages/TheTeam';

const UserApp = ({ user }) => {
   return (
      <BrowserRouter>
         <ToastContainer autoClose={3000} />
         <Header user={user} />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign_in" element={<SignIn user={user} />} />
            <Route
               path="/dashboard"
               element={
                  <AuthGuard>
                     <Dashboard />
                  </AuthGuard>
               }
            />
            <Route path="/the_team" element={<TheTeam />} />
            <Route
               path="/admin_players"
               element={
                  <AuthGuard>
                     <AdminPlayers />
                  </AuthGuard>
               }
            />
            <Route
               path="/admin_players/add_player"
               element={
                  <AuthGuard>
                     <AddEditPlayers />
                  </AuthGuard>
               }
            />
            <Route
               path="/admin_players/edit_player/:playerID"
               element={
                  <AuthGuard>
                     <AddEditPlayers />
                  </AuthGuard>
               }
            />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
};

export default UserApp;
