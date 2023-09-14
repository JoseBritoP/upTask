import { Routes,Route } from 'react-router-dom'
import {AuthLayout,RoutePrivates} from './layouts/'
import { useThemeValue } from './utils/theme'
import { Login,Register,ForgetPassword,NewPassword, ConfirmedAccount,Error,Proyects,Landing } from './pages'
function App() {
  const {value,handleChangeTheme} = useThemeValue()
  return (
    <div className='p-4 flex flex-col justify-center items-center'>
      <button className="self-end p-4 text-center font-bold text-slate-900 dark:text-slate-200 focus:text-sky-900 active:text-sky-900 hover:cursor-pointer" onClick={handleChangeTheme}>{value}</button>
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
      <Route path='/*' element={<Error/>}/>
    </Routes>
    </div>
  )
}

export default App
