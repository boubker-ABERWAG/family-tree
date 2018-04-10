package fr.aberwag.familytree.repository;

import java.util.List;
import java.util.Optional;

import fr.aberwag.familytree.domain.Membre;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface MembreRepository extends PagingAndSortingRepository<Membre, String> {

    Optional<Membre> findOneByPseudo(String pseudo);

    List<Membre> findByActifTrue();
}
