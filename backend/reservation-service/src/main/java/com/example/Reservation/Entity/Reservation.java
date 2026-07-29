package com.example.Reservation.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import java.time.LocalDate;

@Entity

public class Reservation implements Serializable {
 @Id
 @GeneratedValue
 private int idR;

 private LocalDate dateR;
 private boolean valide;

    public Reservation(LocalDate dateR, boolean valide) {
        this.dateR = dateR;
        this.valide = valide;

    }

    public int getIdR() {
        return idR;
    }

    public void setIdR(int idR) {
        this.idR = idR;
    }

    public LocalDate getDateR() {
        return dateR;
    }

    public void setDateR(LocalDate dateR) {
        this.dateR = dateR;
    }

    public boolean isValide() {
        return valide;
    }

    public void setValide(boolean valide) {
        this.valide = valide;
    }

    public Reservation(){
        super();
    }
    public Reservation(boolean valide){
        super();
        this.valide=valide;
    }
}
