import { useEffect, useState } from 'react';
import { matchesCollection } from '../../../firebase';
import Block from './Block/Block';
import { HomeMatches, MatchItem, Wrapper } from './styles';

const Blocks = () => {
   const [matches, setMatches] = useState([]);

   useEffect(() => {
      if (!matches.length) {
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
               console.log(error);
            });
      }
   }, [matches]);

   const showMatches = (matches) =>
      matches &&
      matches.map((match) => (
         <MatchItem bottom key={match.id} triggerOnce>
            <div>
               <Wrapper>
                  <Block {...match} />
               </Wrapper>
            </div>
         </MatchItem>
      ));

   return <HomeMatches>{showMatches(matches)}</HomeMatches>;
};

export default Blocks;
