import Featured from './Featured';
import Matches from './Matches';
import MeetPlayers from './MeetPlayers';
import Promotion from './Promotion';
import { BckBlue } from './styles';

const Home = () => {
   return (
      <BckBlue>
         <Featured />
         <Matches />
         <MeetPlayers />
         <Promotion />
      </BckBlue>
   );
};

export default Home;
