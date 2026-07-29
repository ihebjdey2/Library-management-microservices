package com.example.Reservation.Services;

import com.example.Reservation.Entity.Reservation;
import com.example.Reservation.Repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository candidateRepository;
    public com.example.Reservation.Entity.Reservation addCandidat(Reservation livre) {
        return candidateRepository.save(livre);
    }
    public List<Reservation> findAll() {
        return candidateRepository.findAll();
    }
    public Reservation updateCandidat(int id, Reservation newCandidat) {

        if (candidateRepository.findById(id).isPresent()) {
            Reservation existingCandidat = candidateRepository.findById(id).get();
            existingCandidat.setValide(newCandidat.isValide());
            existingCandidat.setDateR(newCandidat.getDateR());
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


