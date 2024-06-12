
import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080' });

export const savePersonName = async (obj) => await instance.post('/people/', obj)

export const getPersons = async () => await instance.get('/people/');
7
export const deletePerson = async (id) => await instance.delete('/people/' + id);

export const updatePerson = async (id, nombre, apellido, fecha ) => await instance.put('/people/'+id, { nombre, apellido, fecha });

