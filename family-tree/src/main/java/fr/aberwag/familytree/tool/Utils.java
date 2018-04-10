package fr.aberwag.familytree.tool;

import fr.aberwag.familytree.domain.Membre;

public class Utils {
    public static Membre mapper(Membre membre, Membre newMembre) {
        membre.setNom(newMembre.getNom());
        membre.setPrenom(newMembre.getPrenom());
        membre.setCivilite(newMembre.getCivilite());
        membre.setDateNaissance(newMembre.getDateNaissance());
        membre.setLieuDeNaissance(newMembre.getLieuDeNaissance());
        membre.setLatitudeNaissance(newMembre.getLatitudeNaissance());
        membre.setLongitudeNaissance(newMembre.getLongitudeNaissance());
        membre.setDescription(newMembre.getDescription());

        return membre;
    }
}