package com.example.Livre.Repository;


import com.example.Livre.Entity.Livre;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface LivreRepository extends JpaRepository<Livre, Integer> {
    @Query("select c from Livre c where c.nomLivre like :name")
    public Page<com.example.Livre.Entity.Livre> candidatByNom(@Param("name") String n, Pageable pageable);
}
