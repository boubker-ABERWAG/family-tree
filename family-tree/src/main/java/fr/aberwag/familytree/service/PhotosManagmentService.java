package fr.aberwag.familytree.service;

import fr.aberwag.familytree.domain.Membre;
import fr.aberwag.familytree.repository.MembreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhotosManagmentService {

    @Autowired
    private MembreRepository membreRepository;

    public Membre addProfilePhoto(String pseudo, String path) {
        return null;
    }

    public Membre deleteProfilePhoto(String pseudo, String path) {
        return null;
    }

    public Membre updateProfilePhoto(String pseudo, String newPath) {
        return null;
    }

}