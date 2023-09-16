/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet,Navigate } from "react-router-dom"
import useProfile from "../hooks/useProfile"
import Aside from "../components/Aside";
const RoutePrivates = () => {
  const {user, load} = useProfile();
  const { id } = user;
  // console.log(load)
  // console.log(user)
  if(load) return 'Loading...'
  return (
    <div className="text-white w-full">
      {id ? (
        <div className="flex flex-col md:flex-row md:min-h-screen">
          <Aside/>
          <main className="flex-1 p-6">
            <Outlet/>
          </main>
        </div>
      ) : <Navigate to={'/'}/>}
    </div>
  )
}

export default RoutePrivates
