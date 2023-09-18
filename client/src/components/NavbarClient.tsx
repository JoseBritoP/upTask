import { useState } from 'react';
import useNavbar from '../hooks/useNavbar';
import { useThemeValue } from '../utils/theme';
import { Link } from 'react-router-dom';

const NavbarClient = () => {
  const [modal, setModal] = useState(false);
  const { handleLogout } = useNavbar();
  const { value, handleChangeTheme } = useThemeValue();

  const handleItems = () => {
    setModal(!modal); // Alternar entre true y false
  };

  const iconValue = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );

  return (
    <div className='pr-5 md:hidden'>
      <button onClick={handleItems}>{iconValue}</button>
      {modal && (
        <div className='flex flex-col border-2 border-t-0 rounded-xl bg-sky-700 text-white dark:bg-sky-950 p-4 absolute top-10 right-0 sm:hidden md:hidden transition-all duration-200 ease-in-out sm:self-end'>
          <Link to={"/proyects"}>
            <h2 className="hover:underline" onClick={handleItems}>Proyectos</h2>
          </Link>
          <button className="hover:underline" type="button" onClick={() => { handleLogout(); handleItems(); }}>Logout</button>
          <button className="self-center pt-2 text-center font-bold text-slate-900 dark:text-slate-200 focus:text-sky-900 active:text-sky-900 hover:cursor-pointer" onClick={() => { handleChangeTheme(); handleItems(); }}>{value}</button>
        </div>
      )}
    </div>
  );
}

export default NavbarClient;
