const NewPassword = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-4xl uppercase text-center">Restablece tu <span className="text-slate-700">contraseña</span></h1>
      <form action="" className="my-10 bg-white shadow rounded-lg px-10 py-5">
        {/* Password */}
        <div className="my-5">
          <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold hover:cursor-pointer">New Password</label>
          <input type="password" name="password" id="password" placeholder="Ingresa tu nueva contraseña" className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black" />
        </div>
        <div className="my-5">
          <label htmlFor="repeat-password" className="uppercase text-gray-600 block text-xl font-bold hover:cursor-pointer">Repetir password</label>
          <input type="password" name="repeat-password" id="repeat-password" placeholder="Repite tu contraseña" className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black" />
        </div>
        <input type="submit" value="Guardar cambios" className="bg-sky-700 w-full py-3 text-white rounded uppercase font-bold hover:bg-sky-600 hover:cursor-pointer transition-colors 300 ease-in mb-5" />
      </form>
  </>
  )
}

export default NewPassword