import axios from '../libs/axios';

export const createProyect = async (name:string,description:string,client:string) =>{
  return axios.post('/proyect',{
    name,description,client
  })
}