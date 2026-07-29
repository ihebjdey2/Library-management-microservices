package com.example.Emprunt.Repository;


import com.example.Emprunt.Entity.Emprunt;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface EmpruntRepository extends JpaRepository<Emprunt, Integer> {
    @Query("select c from Emprunt c where c.abonne like :name")
    public Page<Emprunt> EmpruntByNom(@Param("name") String n, Pageable pageable);
}
