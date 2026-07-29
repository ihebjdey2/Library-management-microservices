package com.example.mscandidat.Services;

import com.example.mscandidat.Entity.Abonnement;
import com.example.mscandidat.Repository.AbonnementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AbonnementService {
    @Autowired
    private AbonnementRepository abonnmentRepository;
    public Abonnement addAbonnement(Abonnement abonnement) {
        return abonnmentRepository.save(abonnement);
    }
    public Abonnement updateAbonnement(int id, Abonnement newAbonnement) {

        if (abonnmentRepository.findById(id).isPresent()) {
            Abonnement existingAbonnement = abonnmentRepository.findById(id).get();
            existingAbonnement.setDateabonnement(newAbonnement.getDateabonnement());
            existingAbonnement.setDuree(newAbonnement.getDuree());
            return abonnmentRepository.save(existingAbonnement);
        } else
            return null;
    }
    public String deleteAbonnement(int id) {
        if (abonnmentRepository.findById(id).isPresent()) {
            abonnmentRepository.deleteById(id);
            return "abonnement supprimé";
        } else
            return "abonnement non supprimé";
    }

    public List<Abonnement> findAlAbonnement(){
        return abonnmentRepository.findAll();
    }
}


