import { createRoot } from 'react-dom/client';
import { firebase } from './firebase';
import UserApp from './UserApp';
import './index.css';

const container = document.getElementById('root');

const root = createRoot(container);

const App = (props) => {
   return <UserApp {...props} />;
};

firebase.auth().onAuthStateChanged((user) => {
   root.render(<App user={user} />);
});
