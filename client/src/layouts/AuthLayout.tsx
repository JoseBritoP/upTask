import {Outlet} from 'react-router-dom'
const AuthLayout = () => {
  return (
    <>
      <main className='container mt-5 p-5 
      sm:mx-auto
      md:mt-16 md:flex md:justify-center'>
        <div className='w-full md:w-2/3 lg:w-4/5 xl:w-2/6'>
          <Outlet/>
        </div>
      </main>
    </>
  )
}

export default AuthLayout
