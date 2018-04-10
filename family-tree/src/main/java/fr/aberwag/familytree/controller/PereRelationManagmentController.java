package fr.aberwag.familytree.controller;

import fr.aberwag.familytree.domain.Membre;
import fr.aberwag.familytree.service.PereRelationmanagmenetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class PereRelationManagmentController {

	@Autowired
	private PereRelationmanagmenetService pereRelationmanagmenetService;

	@RequestMapping(method = RequestMethod.POST, value = "/pere")
	public Membre addFather(@RequestBody Membre child, @RequestBody Membre Father) {
		return pereRelationmanagmenetService.addFather(child, Father);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/pere")
	public Membre deleteFather(@RequestBody Membre child, @RequestBody Membre Father) {
		return pereRelationmanagmenetService.deleteFather(child, Father);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/pere/{fils}")
	public Membre addFatherByPsuedo(@RequestParam("fils") String childPseudo, @RequestParam("pere") String FatherPseudo) {
		return pereRelationmanagmenetService.addFather(childPseudo, FatherPseudo);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/pere/{fils}")
	public Membre deleteFatherByPsuedo(@RequestParam("fils") String childPseudo, @RequestParam("pere") String FatherPseudo) {
		return pereRelationmanagmenetService.addFather(childPseudo, FatherPseudo);
	}
}
