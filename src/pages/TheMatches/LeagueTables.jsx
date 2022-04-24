import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableRow,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import { positionsCollection } from '../../firebase';
import { LeagueTableWrapper, Title } from './styles';

const LeagueTable = () => {
   const [positions, setPosition] = useState(null);

   useEffect(() => {
      if (!positions) {
         positionsCollection.get().then((snapshot) => {
            const positions = snapshot.docs.map((doc) => ({
               id: doc.id,
               ...doc.data(),
            }));
            setPosition(positions);
         });
      }
   }, [positions]);

   const showTeamPositions = () =>
      positions
         ? positions.map((pos, i) => (
              <TableRow key={i}>
                 <TableCell>{i + 1}</TableCell>
                 <TableCell>{pos.team}</TableCell>
                 <TableCell>{pos.w}</TableCell>
                 <TableCell>{pos.d}</TableCell>
                 <TableCell>{pos.l}</TableCell>
                 <TableCell>{pos.pts}</TableCell>
              </TableRow>
           ))
         : null;

   return (
      <LeagueTableWrapper>
         <Title>League Table</Title>
         <div>
            <Table>
               <TableHead>
                  <TableRow>
                     <TableCell>Pos</TableCell>
                     <TableCell>Team</TableCell>
                     <TableCell>W</TableCell>
                     <TableCell>L</TableCell>
                     <TableCell>D</TableCell>
                     <TableCell>Pts</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>{showTeamPositions()}</TableBody>
            </Table>
         </div>
      </LeagueTableWrapper>
   );
};

export default LeagueTable;
