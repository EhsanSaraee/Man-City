import Featured from './Featured';
import Matches from './Matches';
import MeetPlayers from './MeetPlayers';
import { BckBlue } from './styles';

const Home = () => {
   return (
      <BckBlue>
         <Featured />
         <Matches />
         <MeetPlayers />
      </BckBlue>
   );
};

export default Home;
