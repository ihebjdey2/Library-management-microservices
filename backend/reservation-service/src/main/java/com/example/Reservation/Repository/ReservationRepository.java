package com.example.Reservation.Repository;


import com.example.Reservation.Entity.Reservation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
    @Query("select c from Reservation c where c.valide like :valide")
    public Page<Reservation> candidatByNom(@Param("valide") boolean n, Pageable pageable);
}
