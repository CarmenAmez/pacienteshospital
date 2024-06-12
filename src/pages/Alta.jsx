import { useState } from "react";
import {useNavigate, Link} from 'react-router-dom';
import { savePersonName } from "../api/pacientes";

function Alta() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [fecha, setFecha] = useState('');
    const navigate = useNavigate();

    const handleCreate = async (e) => {
        savePersonName({ nombre, apellido, fecha });
        setNombre('');
        setApellido('');
        setFecha('');
        navigate("/consulta");
    };
    return (
        <div>
            <h1>Alta</h1>
            <h3>Introduzca el nombre, el apellido y la fecha de ingreso del paciente.</h3>

            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" /><br />
            <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Apellido" /> <br />
            <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} placeholder="Fecha" />
            <br />
            <button onClick={handleCreate} type="submit">Alta</button><br />
            <li><Link to={'/'}>Inicio</Link></li>

        </div>
    )
}

export default Alta