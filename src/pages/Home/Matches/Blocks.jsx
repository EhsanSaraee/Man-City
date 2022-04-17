import { useEffect, useState } from 'react';
import { matchesCollection } from '../../../firebase';

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
               console.log(matches);
            })
            .catch((error) => {
               console.log(error);
            });
      }
   }, [matches]);

   return (
      <>
         <h1>Blocks</h1>
      </>
   );
};

export default Blocks;
