package fr.aberwag.familytree.controller;

import fr.aberwag.familytree.domain.Membre;
import fr.aberwag.familytree.service.MereRelationManagmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MereRelationManagmentController {

	@Autowired
	private MereRelationManagmentService mereRelationManagmentService;

	@RequestMapping(method = RequestMethod.POST, value = "/mere")
	public Membre addMother(@RequestBody Membre child, @RequestBody Membre Mother) {
		return mereRelationManagmentService.addMother(child, Mother);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/mere")
	public Membre deleteMother(@RequestBody Membre child, @RequestBody Membre Mother) {
		return mereRelationManagmentService.deleteMother(child, Mother);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/mere/{fils}")
	public Membre addMotherByPsuedo(@RequestParam("fils") String childPseudo, @RequestParam("mere") String MotherPseudo) {
		return mereRelationManagmentService.addMother(childPseudo, MotherPseudo);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/mere/{fils}")
	public Membre deleteMotherByPsuedo(@RequestParam("fils") String childPseudo, @RequestParam("mere") String MotherPseudo) {
		return mereRelationManagmentService.addMother(childPseudo, MotherPseudo);
	}
}
