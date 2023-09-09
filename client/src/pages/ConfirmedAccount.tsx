import { useParams, Link } from 'react-router-dom';
import useAccountConfirmation from '../hooks/useAccountConfirmation';
import AlertComponent from '../components/Alert';

const ConfirmedAccount = () => {

  const { token } = useParams();
  const { message, userConfirm, error } = useAccountConfirmation(token);

  return (
    <>
      <h1 className="text-sky-600 font-black text-4xl uppercase text-center">
        Confirma tu cuenta para crear tus{' '}
        <span className="text-slate-700 dark:text-slate-100">proyectos</span>
      </h1>
      <div className="bg-slate-100 p-8 flex flex-col gap-2 justify-center items-center rounded-xl border-2 border-gray-300 shadow-xl dark:bg-gray-900 mt-20 dark:border-gray-700 dark:shadow-slate-900 dark:shadow-md">
        <AlertComponent message={message} error={error} />
        {userConfirm === true ? (
          <Link
            to={"/"}
            className='block text-center my-5 p-2 text-slate-500 uppercase text-base font-bold dark:text-gray-300 hover:dark:text-gray-50'
          >
            Inicia sesión
          </Link>
        ): (
          <p className='block text-center my-5 p-2 text-red-700 uppercase text-lg font-bold dark:text-red-300 hover:dark:text-gray-50'>Token expirado</p>
        )}
      </div>
    </>
  );
};

export default ConfirmedAccount;
