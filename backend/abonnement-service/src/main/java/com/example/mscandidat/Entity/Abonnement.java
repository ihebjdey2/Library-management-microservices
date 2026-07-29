package com.example.mscandidat.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import java.time.LocalDate;

@Entity

public class Abonnement implements Serializable {
 @Id
 @GeneratedValue
 private int id;
 private int duree ;
 private LocalDate dateabonnement ;

    public Abonnement(int id, int duree, LocalDate dateabonnement) {
        this.id = id;
        this.duree = duree;
        this.dateabonnement = dateabonnement;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getDuree() {
        return duree;
    }

    public void setDuree(int duree) {
        this.duree = duree;
    }

    public LocalDate getDateabonnement() {
        return dateabonnement;
    }

    public void setDateabonnement(LocalDate dateabonnement) {
        this.dateabonnement = dateabonnement;
    }

    public Abonnement(){
        super();
    }
    public Abonnement(String nom){
        super();

    }
}
