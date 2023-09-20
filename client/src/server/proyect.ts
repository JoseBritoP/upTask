import axios from '../libs/axios';

export const createProyect = async (name:string,description:string,client:string) =>{
  return axios.post('/proyect',{
    name,description,client
  })
}

export const getProyects = async () => {
  return axios.get('/proyect');
};

export const getProyectDetail = async (id:string) => {
  return axios.get(`proyect/task/${id}`)
}