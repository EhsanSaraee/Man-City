import {
   Button,
   CircularProgress,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableRow,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import { playersCollection } from '../../../firebase';
import AdminLayout from '../../../HOC/AdminLayout';
import { errorToast } from '../../../utils/tools';
import { Link } from 'react-router-dom';
import { AdminProgress } from './styles';

const AdminPlayers = () => {
   const [lastVisible, setLastVisible] = useState(null);
   const [loading, setLoading] = useState(false);
   const [players, setPlayers] = useState(null);

   useEffect(() => {
      if (!players) {
         setLoading(true);
         playersCollection
            .limit(2)
            .get()
            .then((snapshot) => {
               const lastVisible = snapshot.docs[snapshot.docs.length - 1];
               const players = snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
               }));
               setLastVisible(lastVisible);
               setPlayers(players);
            })
            .catch((error) => {
               console.log(error);
            })
            .finally(() => {
               setLoading(false);
            });
      }
   }, [players]);

   const loadMorePlayers = () => {
      if (lastVisible) {
         setLoading(true);
         playersCollection
            .startAfter(lastVisible)
            .limit(2)
            .get()
            .then((snapshot) => {
               const lastVisible = snapshot.docs[snapshot.docs.length - 1];
               const newPlayers = snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
               }));

               setLastVisible(lastVisible);
               setPlayers([...players, ...newPlayers]);
            })
            .catch((error) => {
               errorToast(error);
            })
            .finally(() => {
               setLoading(false);
            });
      } else {
         errorToast('No more players to load');
      }
   };

   return (
      <AdminLayout title="The Players">
         <div style={{ marginBottom: '5px' }}>
            <Button
               disableElevation
               variant="outlined"
               component={Link}
               to="/admin_players/add_player"
            >
               Add Player
            </Button>
         </div>
         <Paper style={{ marginBottom: '5px' }}>
            <Table>
               <TableHead>
                  <TableRow>
                     <TableCell>First Name</TableCell>
                     <TableCell>Last Name</TableCell>
                     <TableCell>Number</TableCell>
                     <TableCell>Position</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {players &&
                     players.map((player) => (
                        <TableRow key={player.id}>
                           <TableCell>
                              <Link
                                 to={`/admin_players/edit_player/${player.id}`}
                              >
                                 {player.name}
                              </Link>
                           </TableCell>
                           <TableCell>
                              <Link
                                 to={`/admin_players/edit_player/${player.id}`}
                              >
                                 {player.lastname}
                              </Link>
                           </TableCell>
                           <TableCell>
                              <Link
                                 to={`/admin_players/edit_player/${player.id}`}
                              >
                                 {player.number}
                              </Link>
                           </TableCell>
                           <TableCell>
                              <Link
                                 to={`/admin_players/edit_player/${player.id}`}
                              >
                                 {player.position}
                              </Link>
                           </TableCell>
                        </TableRow>
                     ))}
               </TableBody>
            </Table>
         </Paper>
         <Button
            variant="contained"
            color="primary"
            disabled={loading}
            onClick={() => loadMorePlayers()}
         >
            Load more
         </Button>
         <AdminProgress>
            {loading && (
               <CircularProgress thickness={7} style={{ color: '#98c5e9' }} />
            )}
         </AdminProgress>
      </AdminLayout>
   );
};

export default AdminPlayers;
