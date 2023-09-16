import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../services/auth'
const useNavbar = () => {
  const navigate = useNavigate();
  const { clearProfile,profile } = useAuthStore();
  const handleLogout = () =>{
    navigate('/');
    clearProfile();
  }

  return { profile, handleLogout}
}

export default useNavbar
