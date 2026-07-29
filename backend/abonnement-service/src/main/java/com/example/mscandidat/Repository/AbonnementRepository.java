package com.example.mscandidat.Repository;


import com.example.mscandidat.Entity.Abonnement;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface AbonnementRepository extends JpaRepository<Abonnement, Integer> {
   /* @Query("select c from Abonnement c where c.nom like :name")
    public Page<Abonnement> candidatByNom(@Param("name") String n, Pageable pageable);*/
}
