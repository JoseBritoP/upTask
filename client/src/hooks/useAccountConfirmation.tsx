/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import axios from 'axios';

const useAccountConfirmation = (token:string|undefined) => {
  const [message, setMessage] = useState('');
  const [userConfirm, setUserConfirm] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API}/auth/${token}`);
        console.log(data);
        // alert(`${data.message}`);
        setMessage(data.message);
        setUserConfirm(true);
        setError(false);
      } catch (error:any) {
        setMessage(error.response?.data?.error || 'Error desconocido');
        setUserConfirm(false);
        setError(true);
      }
    };
    confirmAccount();
  }, [token]);

  return { message, userConfirm, error };
};

export default useAccountConfirmation;