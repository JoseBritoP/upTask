import useProyectForm from "../hooks/useProyectForm"
import AlertComponent from "./Alert";
const FormProyect = () => {
  const { formik, message, error, submit } = useProyectForm();
  return (
    <form action="" className="w-full lg:w-2/3 md:w-5/6 my-10 bg-white shadow rounded-lg px-5 py-2 pb-4 border-2 dark:bg-slate-950 dark:border-gray-700 dark:border-2" onSubmit={formik.handleSubmit}>      
      {/* Username */}
      <div className="my-5">
        <label htmlFor="name" className="uppercase text-gray-600 block text-xl font-bold dark:text-gray-200 hover:cursor-pointer">Nombre</label>
        <input
          type="text" name="name" id="name" placeholder="Ingrese su nombre de usuario"
          className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black dark:border-gray-500 dark:bg-gray-900 dark:placeholder:text-gray-300 dark:text-slate-100"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 font-semibold pt-2 dark:text-red-600">{formik.errors.name}</p>
        )}
      </div>
      {/* description */}
      <div className="my-5">
        <label htmlFor="description" className="uppercase text-gray-600 block text-xl font-bold dark:text-gray-200 hover:cursor-pointer">Descripción</label>
        <textarea
          name="description" id="description" placeholder="Ingrese la descripción de su proyecto"
          className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black dark:border-gray-500 dark:bg-gray-900 dark:placeholder:text-gray-300 dark:text-slate-100"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description && (
          <p className="text-red-500 font-semibold pt-2 dark:text-red-600">{formik.errors.description}</p>
        )}
      </div>
        {/* client */}
        <div className="my-5">
        <label htmlFor="client" className="uppercase text-gray-600 block text-xl font-bold dark:text-gray-200 hover:cursor-pointer">Nombre del cliente</label>
        <input
          type="text" name="client" id="client" placeholder="Ingrese su nombre de usuario"
          className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black dark:border-gray-500 dark:bg-gray-900 dark:placeholder:text-gray-300 dark:text-slate-100"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.client}
        />
        {formik.touched.client && formik.errors.client && (
          <p className="text-red-500 font-semibold pt-2 dark:text-red-600">{formik.errors.client}</p>
        )}
      </div>
      <input
          type="submit"
          value="Crear"
          className="bg-sky-700 w-full py-3 text-white rounded uppercase font-bold hover:bg-sky-600 hover:cursor-pointer dark:bg-sky-800 dark:hover:bg-sky-700 transition-colors 300 ease-in mb-5 disabled:bg-sky-950"
        />
      {submit && <AlertComponent message={message} error={error}/>}
    </form>
  )
}

export default FormProyect
