import { server } from './index'
import {connectDB} from './config/db'

const PORT = process.env.PORT || 3001;
connectDB();
server.listen(PORT,()=>{
  console.log(`Server on port ${PORT}`);
});