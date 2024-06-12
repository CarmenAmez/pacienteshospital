import { Link } from "react-router-dom";


function Inicio() {
    return (
        <div>
            <h1>Inicio</h1>
            <h3>Seleccione la opción que desee realizar:</h3>
            <ul>
                <li><Link to={'/alta'}>Alta</Link></li>
                <li><Link to={'/baja'}>Baja</Link></li>
                <li><Link to={'/consulta'}>Consulta</Link></li>
                <li><Link to={'/modificacion'}>Modificación</Link></li>
            </ul>
        </div>
    )
}

export default Inicio;