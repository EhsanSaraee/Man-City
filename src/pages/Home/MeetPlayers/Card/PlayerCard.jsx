import {
   PlayerCardInfo,
   PlayerCardName,
   PlayerCardNumber,
   PlayerCardThumb,
   PlayerCardWrapper,
} from './styles';

const PlayerCard = ({ bck, number, name, lastname }) => {
   return (
      <PlayerCardWrapper>
         <PlayerCardThumb
            style={{ background: `#f2f9ff url(${bck})` }}
         ></PlayerCardThumb>
         <PlayerCardInfo>
            <PlayerCardNumber>{number}</PlayerCardNumber>
            <PlayerCardName>
               <span>{name}</span>
               <span>{lastname}</span>
            </PlayerCardName>
         </PlayerCardInfo>
      </PlayerCardWrapper>
   );
};

export default PlayerCard;
