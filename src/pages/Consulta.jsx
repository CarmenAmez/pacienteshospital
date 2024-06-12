import { useEffect, useState } from "react"
import { getPersons } from "../api/pacientes"
import {Link} from 'react-router-dom';


const Consulta = () => {
    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
        getPersons().then(data => setPacientes(data.data))
    },[])

    return (
        <div>
            <h1>Lista de pacientes</h1>
            <ul>
                {pacientes.map(pacientes => (
                    <li key={pacientes.id}>
                        <h2>{pacientes.apellido}, 
                        {pacientes.nombre}.</h2>
                        Dado de alta el {pacientes.fecha},
                        con id:  {pacientes.id}</li>
                ))}
            </ul>
            <li><Link to={'/'}>Inicio</Link></li>
            <li><Link to={'/alta'}>Alta</Link></li>
            <li><Link to={'/baja'}>Baja</Link></li>
            <li><Link to={'/modificacion'}>Modificación</Link></li>
        </div>
    )
}

export default Consulta;