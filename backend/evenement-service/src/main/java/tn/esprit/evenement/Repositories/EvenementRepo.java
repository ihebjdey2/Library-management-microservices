package tn.esprit.evenement.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.evenement.Entities.Evenement;
@Repository
public interface EvenementRepo extends JpaRepository<Evenement,Long>{
}
