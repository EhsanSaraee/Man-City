import { FormHelperText } from '@material-ui/core';
import { toast } from 'react-toastify';
import { app } from '../firebase';

export const successToast = (message) => {
   toast.success(message, {
      position: toast.POSITION.TOP_LEFT,
      theme: 'colored',
   });
};

export const errorToast = (message) => {
   toast.error(message, {
      position: toast.POSITION.TOP_LEFT,
      theme: 'colored',
   });
};

export const logoutHandler = () => {
   app.auth()
      .signOut()
      .then(() => {
         successToast('Good bye!!');
      })
      .catch((error) => {
         errorToast(error.message);
      });
};

export const textErrorHelper = ({ touched, errors }, values) => ({
   error: errors[values] && touched[values],
   helperText: errors[values] && touched[values] && errors[values],
});

export const selectErrorHelper = ({ touched, errors }, values) => {
   if (errors[values] && touched[values]) {
      return <FormHelperText>{errors[values]}</FormHelperText>;
   }
};

export const isSelectError = ({ touched, errors }, values) =>
   errors[values] && touched[values];
