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
import { Link } from 'react-router-dom';
import { matchesCollection } from '../../../firebase';
import AdminLayout from '../../../HOC/AdminLayout';
import { errorToast } from '../../../utils/tools';
import { AdminProgress, MatchesTagGreen, MatchesTagRed } from './styles';

const AdminMatches = () => {
   const [lastVisible, setLastVisible] = useState(null);
   const [loading, setLoading] = useState(false);
   const [matches, setMatches] = useState(null);

   useEffect(() => {
      if (!matches) {
         setLoading(true);
         matchesCollection
            .limit(2)
            .get()
            .then((snapshot) => {
               const lastVisible = snapshot.docs[snapshot.docs.length - 1];
               const matches = snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
               }));
               setLastVisible(lastVisible);
               setMatches(matches);
            })
            .catch((error) => {
               errorToast(error);
            })
            .finally(() => {
               setLoading(false);
            });
      }
   }, [matches]);

   const loadMoreMatches = () => {
      if (lastVisible) {
         setLoading(true);
         matchesCollection
            .startAfter(lastVisible)
            .limit(2)
            .get()
            .then((snapshot) => {
               const lastVisible = snapshot.docs[snapshot.docs.length - 1];
               const newMatches = snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
               }));

               setLastVisible(lastVisible);
               setMatches([...matches, ...newMatches]);
            })
            .catch((error) => {
               errorToast(error);
            })
            .finally(() => {
               setLoading(false);
            });
      } else {
         errorToast('nothing to load');
      }
   };

   return (
      <AdminLayout title="The Matches">
         <div style={{ marginBottom: '5px' }}>
            <Button
               disableElevation
               variant="outlined"
               component={Link}
               to={'/admin_matches/add_match'}
            >
               Add match
            </Button>
         </div>

         <Paper style={{ marginBottom: '5px' }}>
            <Table>
               <TableHead>
                  <TableRow>
                     <TableCell>Date</TableCell>
                     <TableCell>Match</TableCell>
                     <TableCell>Result</TableCell>
                     <TableCell>Final</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {matches
                     ? matches.map((match) => (
                          <TableRow key={match.id}>
                             <TableCell>{match.date}</TableCell>
                             <TableCell>
                                <Link
                                   to={`/admin_matches/edit_match/${match.id}`}
                                >
                                   {match.away} <strong>-</strong> {match.local}
                                </Link>
                             </TableCell>
                             <TableCell>
                                {match.resultAway} <strong>-</strong>{' '}
                                {match.resultLocal}
                             </TableCell>
                             <TableCell>
                                {match.final === 'Yes' ? (
                                   <MatchesTagRed>Final</MatchesTagRed>
                                ) : (
                                   <MatchesTagGreen>
                                      Not played yet
                                   </MatchesTagGreen>
                                )}
                             </TableCell>
                          </TableRow>
                       ))
                     : null}
               </TableBody>
            </Table>
         </Paper>

         <Button
            variant="contained"
            color="primary"
            onClick={() => loadMoreMatches()}
            disabled={loading}
         >
            Load more
         </Button>

         <AdminProgress>
            {loading ? (
               <CircularProgress thickness={7} style={{ color: '#98c5e9' }} />
            ) : null}
         </AdminProgress>
      </AdminLayout>
   );
};

export default AdminMatches;
