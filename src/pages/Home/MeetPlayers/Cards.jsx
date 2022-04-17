import { Animate } from 'react-move';
import { easePolyOut } from 'd3-ease';

import Otamendi from '../../../resources/images/players/Otamendi.png';
import Sterling from '../../../resources/images/players/Raheem_Sterling.png';
import Kompany from '../../../resources/images/players/Vincent_Kompany.png';

let cards = [
   {
      bottom: 90,
      left: 300,
      player: Kompany,
   },
   {
      bottom: 60,
      left: 200,
      player: Sterling,
   },
   {
      bottom: 30,
      left: 100,
      player: Otamendi,
   },
   {
      bottom: 0,
      left: 0,
      player: Kompany,
   },
];

const HomeCards = (props) => {
   const showAnimateCards = () => cards.map((card, i) => <Animate></Animate>);

   return <div>{showAnimateCards()}</div>;
};

export default HomeCards;
