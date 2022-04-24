import { CircularProgress } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { matchesCollection } from '../../firebase';
import { errorToast } from '../../utils/tools';
import LeagueTable from './LeagueTables';
import {
   Left,
   Progress,
   Right,
   TheMatchesContainer,
   TheMatchesWrapper,
} from './styles';

const TheMatches = () => {
   const [matches, setMatches] = useState(null);

   useEffect(() => {
      if (!matches) {
         matchesCollection
            .get()
            .then((snapshot) => {
               const matches = snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
               }));
               setMatches(matches);
            })
            .catch((error) => {
               errorToast(error);
            });
      }
   }, [matches]);

   return (
      <>
         {matches ? (
            <TheMatchesContainer>
               <TheMatchesWrapper>
                  <Left>list</Left>
                  <Right>
                     <LeagueTable />
                  </Right>
               </TheMatchesWrapper>
            </TheMatchesContainer>
         ) : (
            <Progress>
               <CircularProgress />
            </Progress>
         )}
      </>
   );
};

export default TheMatches;
