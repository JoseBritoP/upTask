import { Routes,Route } from 'react-router-dom'
import {AuthLayout,RoutePrivates} from './layouts/'
import Navbar from './components/Navbar'
import { Login,Register,ForgetPassword,NewPassword, ConfirmedAccount,Error,Proyects,Landing,AdminDashboard } from './pages'
function App() {
  return (
    <div className='p-4 flex flex-col justify-center items-center'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<AuthLayout/>}>
        <Route index element={<Landing/>} />
        <Route path='login'  element={<Login/>} />
        <Route path='register' element={<Register/>} />
        <Route path='forget-password' element={<ForgetPassword/>} />
        <Route path='forget-password/:token' element={<NewPassword/>} />
        <Route path='confirm-account/:token' element={<ConfirmedAccount/>} />
      </Route>
      <Route path='/proyects' element={<RoutePrivates/>}>
        <Route index element={<Proyects/>}/>
      </Route>
      <Route path='/admin' element={<RoutePrivates/>}>
        <Route index element={<AdminDashboard/>}/>
      </Route>
      <Route path='/*' element={<Error/>}/>
    </Routes>
    </div>
  )
}

export default App
