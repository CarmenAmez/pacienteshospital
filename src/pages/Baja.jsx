import { useState } from 'react';
import {deletePerson} from '../api/pacientes';
import {Link} from 'react-router-dom';


function Baja() {
    const [id, setId] = useState('');


    const handleDelete = async (e) => {
        deletePerson(id);
        setId('');

    };

    return (
        <div>
            <h2>Baja del Paciente</h2>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="ID"
                />
                <button onClick={handleDelete} type="submit">Eliminar</button>
                <li><Link to={'/consulta'}>Consulta</Link></li>
                <li><Link to={'/'}>Inicio</Link></li>
        </div>
    );
}

export default Baja;