import {Routes,Route} from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'

import { Login,Register,ForgetPassword,NewPassword, ConfirmedAccount } from './pages'
function App() {

  return (
    <Routes>
      <Route path='/' element={<AuthLayout/>}>
        <Route index  element={<Login/>} />
        <Route path='register' element={<Register/>} />
        <Route path='forget-password' element={<ForgetPassword/>} />
        <Route path='forget-password/:token' element={<NewPassword/>} />
        <Route path='confirm/:token' element={<ConfirmedAccount/>} />
      </Route>
      <Route/>
    </Routes>
  )
}

export default App
