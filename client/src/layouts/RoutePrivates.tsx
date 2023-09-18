/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet,Navigate } from "react-router-dom"
import Aside from "../components/Aside";
import { useAuthStore } from "../services/auth";
const RoutePrivates = () => {
  const { profile } = useAuthStore();
  return (
    <div className="text-white w-full">
      {profile.id !== "" ? (
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
