import FormProyect from "../components/FormProyect"
const NewProyect = () => {
  return (
    <>
      <h1 className="text-xl font-black md:text-2xl text-black dark:text-white">Crear proyecto</h1>
      <div className="mt-10 flex justify-center">
        <FormProyect/>
      </div>
    </>
  )
}

export default NewProyect
