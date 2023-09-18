/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet,Navigate } from "react-router-dom"
import Aside from "../components/Aside";
import { useAuthStore } from "../services/auth";
const RoutePrivates = () => {
  const { profile } = useAuthStore();
  return (
    <div className="text-white w-full">
      {profile.id !== "" ? (
        <div className="flex flex-col md:flex-row md:min-h-[55.4rem]">
          <Aside/>
          <main className="flex flex-col flex-1 justify-start items-center gap-4 p-6 w-full">
            <Outlet/>
          </main>
        </div>
      ) : <Navigate to={'/'}/>}
    </div>
  )
}

export default RoutePrivates
