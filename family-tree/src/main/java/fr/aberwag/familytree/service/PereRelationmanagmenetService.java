package fr.aberwag.familytree.service;

import fr.aberwag.familytree.domain.Membre;
import fr.aberwag.familytree.repository.MembreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PereRelationmanagmenetService {

    @Autowired
    private MembreRepository membreRepository;
    private Membre personne = null;

    public Membre addFather(Membre child, Membre father) {
        child.setPere(father);
        return membreRepository.save(child);
    }

    public Membre deleteFather(Membre child, Membre father) {
        membreRepository
                .findOneByPseudo(child.getPseudo())
                .filter(
                        m -> m.getMere().getPseudo().equals(father.getPseudo()))
                .ifPresent(m -> {
                    m.setMere(null);});

        return membreRepository.save(child);
    }

    public Membre addFather(String childPseudo, String fatherPseudo) {
        membreRepository.findOneByPseudo(childPseudo)
                .map(m -> personne = m)
                .ifPresent(m -> {
                    m.setConjoint(membreRepository.findOneByPseudo(fatherPseudo).get());
                    membreRepository.save(m);
                });
        return personne;
    }

    public Membre deleteFather(String childPseudo, String fatherPseudo) {
        personne = membreRepository.findOneByPseudo(childPseudo).get();
        membreRepository
                .findOneByPseudo(fatherPseudo)
                .filter(
                        m -> personne.getConjoint().getPseudo().equals(m.getPseudo()))
                .ifPresent(m -> {
                    personne.setConjoint(m);
                });
        return membreRepository.save(personne);
    }
}