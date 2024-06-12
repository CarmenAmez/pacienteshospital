import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updatePerson, getPersons } from '../api/pacientes';

const Modificacion = () => {
  const [pacientes, setPacientes] = useState([]);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fecha, setFecha] = useState('');
  const [id, setId] = useState('');

  const refetch = () => {
    getPersons().then(data => setPacientes(data.data))
  }

  useEffect(() => {
    refetch()
  }, [])

  const handleUpdate = async (e) => {
    await updatePerson(id, nombre, apellido, fecha);
    setNombre('');
    setApellido('');
    setFecha('');
    setId('');
    refetch();
  };


  return (
    <div>
      <h1>Modificacion</h1>
      <ul>
        {pacientes.map(paciente => (
          <li key={paciente.id}>
            <h4>{paciente.nombre} <br /> {paciente.apellido}</h4>
            Ingreso: {paciente.fecha},
            ID: {paciente.id}
          </li>
        ))}
      </ul>

      <h3>Introduzca el nombre, el apellido y/o la fecha nueva del paciente que desee modificar.</h3>

      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" /><br />
      <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Apellido" /><br />
      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} placeholder="Fecha" /> <br />
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="ID" /> <br />
      <button onClick={handleUpdate} type="submit">Modifica</button><br />
      <li><Link to={'/'}>Inicio</Link></li>
    </div>
  )
}

export default Modificacion;
