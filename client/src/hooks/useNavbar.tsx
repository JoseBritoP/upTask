import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../services/auth'
import { useProyectStore } from '../services/proyect';
const useNavbar = () => {
  const navigate = useNavigate();
  const { clearProfile,profile } = useAuthStore();
  const { clearProyects } = useProyectStore()
  const handleLogout = () =>{
    navigate('/');
    clearProfile();
    clearProyects();
  }

  return { profile, handleLogout}
}

export default useNavbar
