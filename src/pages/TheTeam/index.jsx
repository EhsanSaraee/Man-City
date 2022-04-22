import { CircularProgress } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import { playersCollection } from '../../firebase';
import { errorToast } from '../../utils/tools';
import PlayerCard from '../Home/MeetPlayers/Card/PlayerCard';
import {
   Progress,
   TeamCards,
   TeamCategoryWrapper,
   TeamItem,
   TeamTitle,
   TheTeamContainer,
} from './styles';

const TheTeam = () => {
   const [loading, setLoading] = useState(true);
   const [players, setPlayers] = useState(null);

   useEffect(() => {
      if (!players) {
         playersCollection
            .get()
            .then((snapshot) => {
               const players = snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
               }));
               setPlayers(players);
            })
            .catch((error) => {
               errorToast(error);
            })
            .finally(() => {
               setLoading(false);
            });
      }
   }, [players]);

   const showPlayerByCategory = (category) =>
      players
         ? players.map((player) => {
              return player.position === category ? (
                 <Slide left key={player.id} triggerOnce>
                    <TeamItem>
                       <PlayerCard
                          number={player.number}
                          name={player.name}
                          lastname={player.lastname}
                          bck={player.image}
                       />
                    </TeamItem>
                 </Slide>
              ) : null;
           })
         : null;

   return (
      <TheTeamContainer>
         {loading ? (
            <Progress>
               <CircularProgress />
            </Progress>
         ) : (
            <div>
               <TeamCategoryWrapper>
                  <TeamTitle>Keepers</TeamTitle>
                  <TeamCards>{showPlayerByCategory('Keeper')}</TeamCards>
               </TeamCategoryWrapper>
               <TeamCategoryWrapper>
                  <TeamTitle>Defence</TeamTitle>
                  <TeamCards>{showPlayerByCategory('Defence')}</TeamCards>
               </TeamCategoryWrapper>
               <TeamCategoryWrapper>
                  <TeamTitle>Midfield</TeamTitle>
                  <TeamCards>{showPlayerByCategory('Midfield')}</TeamCards>
               </TeamCategoryWrapper>
               <TeamCategoryWrapper>
                  <TeamTitle>Strikers</TeamTitle>
                  <TeamCards>{showPlayerByCategory('Striker')}</TeamCards>
               </TeamCategoryWrapper>
            </div>
         )}
      </TheTeamContainer>
   );
};

export default TheTeam;
