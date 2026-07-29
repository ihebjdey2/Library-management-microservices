package tn.esprit.evenement.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.evenement.Entities.Evenement;
import tn.esprit.evenement.Repositories.EvenementRepo;

@Service
public class EvenementServices {
    @Autowired
    private EvenementRepo evenementRepository;

    public Evenement addEvenement(Evenement evenement) {
        return evenementRepository.save(evenement);
    }

    public Evenement updateEvenement(long id, Evenement evenement) {
        if (evenementRepository.findById(id).isPresent()) {
            Evenement existingEvenement = evenementRepository.findById(id).get();
            existingEvenement.setNomEvenement(evenement.getNomEvenement());
            existingEvenement.setDateDebutEvenement(evenement.getDateDebutEvenement());
            existingEvenement.setDateFinEvenement(evenement.getDateFinEvenement());
            return evenementRepository.save(existingEvenement);
        } else
            return null;
    }

    public String deleteEvenement(long id) {
        if (evenementRepository.findById(id).isPresent()) {
            evenementRepository.deleteById(id);
            return "evenement supprimé";
        } else
            return "evenement non supprimé";
    }
}
