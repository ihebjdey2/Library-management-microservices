package com.example.Emprunt.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import java.time.LocalDate;

@Entity

public class Emprunt implements Serializable {
 @Id
 @GeneratedValue
 private int idEmprunt;

 private String abonne;
 private LocalDate date_Emprunt,date_retourE;


    public Emprunt(String abonne, LocalDate date_Emprunt, LocalDate date_retourE) {
        this.abonne = abonne;
        this.date_Emprunt = date_Emprunt;
        this.date_retourE = date_retourE;
    }

    public int getIdEmprunt() {
        return idEmprunt;
    }

    public void setIdEmprunt(int idEmprunt) {
        this.idEmprunt = idEmprunt;
    }

    public String getAbonne() {
        return abonne;
    }

    public void setAbonne(String abonne) {
        this.abonne = abonne;
    }

    public LocalDate getDate_Emprunt() {
        return date_Emprunt;
    }

    public void setDate_Emprunt(LocalDate date_Emprunt) {
        this.date_Emprunt = date_Emprunt;
    }

    public LocalDate getDate_retourE() {
        return date_retourE;
    }

    public void setDate_retourE(LocalDate date_retourE) {
        this.date_retourE = date_retourE;
    }

    public Emprunt(){
        super();
    }
    public Emprunt(String abonne){
        super();
        this.abonne=abonne;
    }
}
