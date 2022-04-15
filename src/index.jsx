import { createRoot } from 'react-dom/client';
import { app } from './firebase';
import UserApp from './UserApp';
import './index.css';

const container = document.getElementById('root');

const root = createRoot(container);

const App = (props) => {
   return <UserApp {...props} />;
};

app.auth().onAuthStateChanged((user) => {
   root.render(<App user={user} />);
});
