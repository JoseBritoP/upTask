import { Proyect } from '../types';
import ButtonsClosePen from '../hooks/ButtonsClosePen';

const ProyectCard = (proyect:Proyect) => {

  console.log(proyect)
  const { handlePenValue, handleCloseValue, penValue, closeValue } = ButtonsClosePen()


  return (
    <div className="flex flex-col flex-wrap border-2 gap-4 py-4 px-6 pb-10 rounded-lg text-black dark:text-gray-50 bg-gray-100 dark:bg-transparent border-black dark:border-gray-400 max-w-[21em]" key={proyect.id}>
      <div className="flex justify-end gap-1">
        <button onClick={handlePenValue} type="button">
          {penValue}
        </button>
        <br />
        <button onClick={handleCloseValue} type="button">
          {closeValue}
        </button>
        <br />
      </div>
      <h2 className="text-xl font-bold text-sky-600">
        Nombre: <span className="text-black dark:text-gray-100 font-semibold">{proyect.name}</span>
      </h2>
      <div>
        <h2 className="text-xl font-bold text-sky-600">Descripción</h2>
        <p className="text-black dark:text-gray-100 font-semibold">{proyect.description}</p>
      </div>
      <h3 className="text-xl font-bold text-sky-600">Fecha de entrega: <span className="text-black dark:text-gray-100 font-semibold">{proyect.limitDate?.split('T')[0]}</span></h3>
      <h3 className="text-xl font-bold text-sky-600">Cliente: <span className="text-black dark:text-gray-100 font-semibold">{proyect.client}</span> </h3>
    </div>
  );
};


export default ProyectCard
