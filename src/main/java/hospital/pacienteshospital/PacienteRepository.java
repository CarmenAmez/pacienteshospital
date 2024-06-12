package hospital.pacienteshospital;


import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface PacienteRepository extends CrudRepository <Pacientes, Integer>{

		
		List <Pacientes>findAll();

	}

