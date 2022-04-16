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
