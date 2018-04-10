package fr.aberwag.familytree.service;

import fr.aberwag.familytree.domain.Membre;
import fr.aberwag.familytree.repository.MembreRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class EnfantRelationManagmentService {

    private static final Logger log = LoggerFactory.getLogger(EnfantRelationManagmentService.class);

    @Autowired
    private MembreRepository membreRepository;

    public Membre addChild(Membre child, Membre Father) {
        return null;
    }
    public Membre addChild(String childPseudo, String FatherPeudo) {
        return null;
    }

    public Membre deleteChild(Membre child, Membre Father) {
        return null;
    }
    public Membre deleteChild(String child, String Father) {
        return null;
    }
}