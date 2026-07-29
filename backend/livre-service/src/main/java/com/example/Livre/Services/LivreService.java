package com.example.Livre.Services;

import com.example.Livre.Entity.Livre;
import com.example.Livre.Repository.LivreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LivreService {
    @Autowired
    private LivreRepository candidateRepository;


    public List<Livre> findAll() {
        return candidateRepository.findAll();
    }
    public com.example.Livre.Entity.Livre addCandidat(Livre livre) {
        return candidateRepository.save(livre);
    }
    public Livre updateCandidat(int id,Livre newLivre) {

        if (candidateRepository.findById(id).isPresent()) {
            Livre existingCandidat = candidateRepository.findById(id).get();
            existingCandidat.setNomLivre(newLivre.getNomLivre());
            existingCandidat.setAuteur(newLivre.getAuteur());
            existingCandidat.setMaisonEdition(newLivre.getMaisonEdition());
            existingCandidat.setNbremprunt(newLivre.getNbremprunt());
            existingCandidat.setNbrpage(newLivre.getNbrpage());
            existingCandidat.setDateEdition(newLivre.getDateEdition());
            return candidateRepository.save(existingCandidat);
        } else
            return null;
    }
    public ResponseEntity<String> deleteCandidat(int id) {
        if (candidateRepository.findById(id).isPresent()) {
            candidateRepository.deleteById(id);
            return ResponseEntity.ok("{\"message\": \"candidat supprimé\"}");
        } else {
            System.out.println("Emprunt not found for id: " + id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\": \"Emprunt non supprimé\"}");
        }
    }
}


