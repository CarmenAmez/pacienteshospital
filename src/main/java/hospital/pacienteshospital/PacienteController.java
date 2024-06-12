package hospital.pacienteshospital;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin // Para hacer peticiones desde otro servidor
@RestController // Para hacer peticiones REST
@RequestMapping("/people")
public class PacienteController {
	@Autowired
	private PacienteRepository invitadoRepository;
	
	@PostMapping("/")
	public void createPeople(@RequestBody Pacientes person) {
		invitadoRepository.save(person);
	}

	@DeleteMapping("/{id}")
	public void deletePeople(@PathVariable("id") Integer id) {
		Pacientes i = new Pacientes();
		i.setId(id);
		invitadoRepository.delete(i);
	}
	
	@GetMapping("/")
	public List<Pacientes> selectPeople() {
		List<Pacientes> people = invitadoRepository.findAll();
		return people;
	}
	
	@PutMapping("/{id}")
	public void updatePeople(@RequestBody Pacientes person, @PathVariable("id")Integer id) {
		person.setId(id);
		invitadoRepository.save(person);
		}
}
