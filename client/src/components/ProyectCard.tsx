import { Link } from 'react-router-dom';
import { Proyect } from '../types';
// import ButtonsClosePen from '../hooks/ButtonsClosePen';

const ProyectCard = (proyect:Proyect) => {

  console.log(proyect)
  // const { handlePenValue, handleCloseValue, penValue, closeValue } = ButtonsClosePen()

  const value = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>


  return (
    <div className="bg-gray-50 dark:bg-slate-900 flex w-full justify-between items-center flex-row border-2 gap-1 py-4 px-6  rounded-lg text-black dark:text-gray-50 border-black dark:border-gray-400" key={proyect.id}>
      <p className="p1 md:p-3 text-xl font-bold text-sky-600">Nombre: <span className="text-black dark:text-gray-100 font-semibold">{proyect.name}</span></p>
      <p className="p1 md:p-3 text-xl font-bold text-sky-600">Cliente: <span className="text-black dark:text-gray-100 font-semibold">{proyect.client}</span> </p>
      {/* <button className='hidden md:block uppercase'>Ver proyecto</button> */}
      <Link to="create-proyect" className="hidden md:block bg-sky-600 p-1 md:p-3 text-white uppercase font-bold text-center rounded-lg">Ver Proyecto</Link>
      <Link to="create-proyect" className="bg-sky-600 p-1 md:hidden text-white uppercase font-bold block text-center rounded-lg">{value}</Link>
      {/* <button className='md:hidden'>{value}</button> */}
    </div>
  );
};


export default ProyectCard
