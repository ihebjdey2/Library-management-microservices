package com.example.Livre.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;

@Entity

public class Livre implements Serializable {
 @Id
 @GeneratedValue
 private int idLivre;

 private String nomLivre,auteur,MaisonEdition;

 private int nbremprunt,nbrpage;
 private LocalDate dateEdition;
    public Livre(String nomLivre, String auteur, String maisonEdition,int nbremprunt,int nbrpage,LocalDate dateEdition) {
        this.nomLivre = nomLivre;
        this.auteur = auteur;
        this.MaisonEdition = maisonEdition;
        this.nbremprunt=nbremprunt;
        this.nbrpage=nbrpage;
        this.dateEdition=dateEdition;
    }

    public int getIdLivre() {
        return idLivre;
    }

    public void setIdLivre(int idLivre) {
        this.idLivre = idLivre;
    }

    public String getNomLivre() {
        return nomLivre;
    }

    public void setNomLivre(String nomLivre) {
        this.nomLivre = nomLivre;
    }

    public String getAuteur() {
        return auteur;
    }

    public void setAuteur(String auteur) {
        this.auteur = auteur;
    }

    public String getMaisonEdition() {
        return MaisonEdition;
    }

    public void setMaisonEdition(String maisonEdition) {
        MaisonEdition = maisonEdition;
    }

    public int getNbremprunt() {
        return nbremprunt;
    }

    public void setNbremprunt(int nbremprunt) {
        this.nbremprunt = nbremprunt;
    }

    public int getNbrpage() {
        return nbrpage;
    }

    public void setNbrpage(int nbrpage) {
        this.nbrpage = nbrpage;
    }

    public LocalDate getDateEdition() {
        return dateEdition;
    }

    public void setDateEdition(LocalDate dateEdition) {
        this.dateEdition = dateEdition;
    }

    public Livre(){
        super();
    }
    public Livre(String nom){
        super();
        this.nomLivre=nom;
    }
}
