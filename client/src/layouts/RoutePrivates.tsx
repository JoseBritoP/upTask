/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet,Navigate } from "react-router-dom"
import useProfile from "../hooks/useProfile"
import useSession from "../hooks/useSession";

const RoutePrivates = () => {
  const {user, load} = useProfile();
  const { id } = user;
  const { session } = useSession();
  console.log(session)
  // console.log(load)
  // console.log(user)
  if(load) return 'Loading...'
  return (
    <div className="text-white">
      {id ? 'Autenticado' : <Navigate to={'/'}/>}
    </div>
  )
}

export default RoutePrivates
