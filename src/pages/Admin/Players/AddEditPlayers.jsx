import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import AdminLayout from '../../../HOC/AdminLayout';
import * as yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import {
   Button,
   FormControl,
   MenuItem,
   Select,
   TextField,
} from '@material-ui/core';
import {
   errorToast,
   isSelectError,
   selectErrorHelper,
   successToast,
   textErrorHelper,
} from '../../../utils/tools';
import { EditPlayersDialogWrapper } from './styles';
import { playersCollection } from '../../../firebase';

const defaultValues = {
   name: '',
   lastname: '',
   number: '',
   position: '',
};

const AddEditPlayers = () => {
   const { playerID } = useParams();
   const navigate = useNavigate();

   const [loading, setLoading] = useState(false);
   const [formType, setFormType] = useState('');
   const [values, setValues] = useState(defaultValues);

   const formik = useFormik({
      enableReinitialize: true,
      initialValues: values,
      validationSchema: yup.object({
         name: yup.string().required('Name is required'),
         lastname: yup.string().required('Lastname is required'),
         number: yup
            .number()
            .required('Number is required')
            .min(0, 'Number must be greater than 0')
            .max(100, 'Number must be less than 100'),
         position: yup.string().required('Position is required'),
      }),
      onSubmit: (values) => submitForm(values),
   });

   const submitForm = (values) => {
      let formData = values;
      setLoading(true);

      if (formType === 'add') {
         playersCollection
            .add(formData)
            .then(() => {
               successToast('Player added successfully');
               formik.resetForm();
               navigate('/admin_players');
            })
            .catch((error) => errorToast(error));
      } else {
         playersCollection
            .doc(playerID)
            .update(formData)
            .then(() => {
               successToast('Player updated successfully');
               navigate('/admin_players');
            })
            .catch((error) => errorToast(error))
            .finally(() => setLoading(false));
      }
   };

   useEffect(() => {
      if (playerID) {
         playersCollection
            .doc(playerID)
            .get()
            .then((snapshot) => {
               const player = snapshot.data();
               if (player) {
                  setFormType('edit');
                  setValues(player);
               } else {
                  errorToast('Player not found');
               }
            })
            .catch((error) => errorToast(error));
      } else {
         setFormType('add');
         setValues(defaultValues);
      }
   }, [playerID]);

   return (
      <AdminLayout title={formType === 'add' ? 'Add Player' : 'Edit Player'}>
         <EditPlayersDialogWrapper>
            <div>
               <form onSubmit={formik.handleSubmit}>
                  image
                  <hr />
                  <h4>Player Info</h4>
                  <div style={{ marginBottom: '5px' }}>
                     <FormControl>
                        <TextField
                           id="name"
                           name="name"
                           variant="outlined"
                           placeholder="First Name"
                           {...formik.getFieldProps('name')}
                           {...textErrorHelper(formik, 'name')}
                        />
                     </FormControl>
                  </div>
                  <div style={{ marginBottom: '5px' }}>
                     <FormControl>
                        <TextField
                           id="lastname"
                           name="lastname"
                           variant="outlined"
                           placeholder="Add lastname"
                           {...formik.getFieldProps('lastname')}
                           {...textErrorHelper(formik, 'lastname')}
                        />
                     </FormControl>
                  </div>
                  <div style={{ marginBottom: '5px' }}>
                     <FormControl>
                        <TextField
                           id="number"
                           name="number"
                           variant="outlined"
                           placeholder="Add number"
                           {...formik.getFieldProps('number')}
                           {...textErrorHelper(formik, 'number')}
                        />
                     </FormControl>
                  </div>
                  <div style={{ marginBottom: '5px' }}>
                     <FormControl error={isSelectError(formik, 'position')}>
                        <Select
                           id="position"
                           name="position"
                           variant="outlined"
                           displayEmpty
                           {...formik.getFieldProps('position')}
                        >
                           <MenuItem value="" disabled>
                              Select a position
                           </MenuItem>
                           <MenuItem value="Keeper">Keeper</MenuItem>
                           <MenuItem value="Defence">Defence</MenuItem>
                           <MenuItem value="Midfield">Midfield</MenuItem>
                           <MenuItem value="Striker">Striker</MenuItem>
                        </Select>
                        {selectErrorHelper(formik, 'position')}
                     </FormControl>
                  </div>
                  <Button
                     type="submit"
                     variant="contained"
                     color="primary"
                     disabled={loading}
                  >
                     {formType === 'add' ? 'Add player' : 'Edit player'}
                  </Button>
               </form>
            </div>
         </EditPlayersDialogWrapper>
      </AdminLayout>
   );
};

export default AddEditPlayers;
