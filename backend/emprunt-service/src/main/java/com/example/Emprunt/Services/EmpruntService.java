package com.example.Emprunt.Services;

import com.example.Emprunt.Entity.Emprunt;
import com.example.Emprunt.Repository.EmpruntRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpruntService {
    @Autowired
    private EmpruntRepository empruntRepository;

    public List<Emprunt> findAll() {
        return empruntRepository.findAll();
    }
    public Emprunt addCandidat(Emprunt candidate) {
        return empruntRepository.save(candidate);
    }
    public Emprunt updateCandidat(int id, Emprunt newCandidat) {

        if (empruntRepository.findById(id).isPresent()) {
            Emprunt existingCandidat = empruntRepository.findById(id).get();
            existingCandidat.setAbonne(newCandidat.getAbonne());
            existingCandidat.setDate_Emprunt(newCandidat.getDate_Emprunt());
            existingCandidat.setDate_retourE(newCandidat.getDate_retourE());
            return empruntRepository.save(existingCandidat);
        } else
            return null;
    }
    public ResponseEntity<String> deleteCandidat(int id) {
        if (empruntRepository.findById(id).isPresent()) {
            empruntRepository.deleteById(id);
            return ResponseEntity.ok("{\"message\": \"Emprunt supprimé\"}");
        } else {
            System.out.println("Emprunt not found for id: " + id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\": \"Emprunt non supprimé\"}");
        }
    }

}


