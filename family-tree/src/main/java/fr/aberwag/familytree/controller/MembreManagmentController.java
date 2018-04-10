package fr.aberwag.familytree.controller;

import fr.aberwag.familytree.domain.Membre;
import fr.aberwag.familytree.service.MembreManagmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class MembreManagmentController {

	@Autowired
	MembreManagmentService membreManagmentService;

	// @ExceptionHandler(FamilyBusinessException.class)
	@RequestMapping(method = RequestMethod.POST, value = "/membres")
	public Membre addMembre(@RequestBody Membre membre) {
		return membreManagmentService.addMembre(membre);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/membres/{pseudo}")
	public Membre deleteMembre(@PathVariable("pseudo") String pseudo) {
		return membreManagmentService.deleteMembre(pseudo);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/membres/{pseudo}")
	public Membre updateMembre(@PathVariable("pseudo") String pseudo, @RequestBody Membre membre) {
		return membreManagmentService.updateMembre(membre);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/membres/{pseudo}")
	public Membre getMembre(@PathVariable("pseudo") String pseudo) {
		return membreManagmentService.getMembre(pseudo);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/membres")
	public List<Membre> getAllActiveMembre() {
		//throw new FamilyBusinessException();
		return membreManagmentService.getAllActifMembre();
	}

	/*@ExceptionHandler(FamilyBusinessException.class)
	public ExceptionMessage familyBusinessException(FamilyBusinessException exception) {
		ExceptionMessage message = ExceptionMessage.builder()
				.date(LocalDateTime.now().format(FamilyExceptionHandlerControllerAdvice.formatter))
				.className(exception.getClass().getName()).message("message d'erreur geré par @ExceptionHandler")
				.build();

		return message;
	}*/
}