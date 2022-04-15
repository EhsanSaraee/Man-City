import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import { Home, SignIn } from './pages';

const UserApp = () => {
   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign_in" element={<SignIn />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
};

export default UserApp;
