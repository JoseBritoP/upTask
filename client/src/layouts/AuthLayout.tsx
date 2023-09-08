import {Outlet} from 'react-router-dom'
const AuthLayout = () => {
  return (
      <main className='container mt-0 p-5 
      sm:mx-auto
      md:mt-6 md:flex md:justify-center'>
        <div className='w-full md:w-2/3 lg:w-4/5 xl:w-3/6 xl:max-w-4/6'>
          <Outlet/>
        </div>
      </main>
  )
}

export default AuthLayout
