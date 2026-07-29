package tn.esprit.evenement.Entities;


import jakarta.persistence.*;


import java.time.LocalDate;

@Entity
@Table(name = "evenement")

public class Evenement {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idEvenement;


    @Column(name = "nom_evenement")
    private String nomEvenement;
    @Column(name = "date_debut")
    private LocalDate dateDebutEvenement;
    @Column(name = "date_fin")
    private LocalDate dateFinEvenement;
    @Column(name = "nbAteliers")
    private long nbAteliers;

    public Evenement() {
    }

    public Evenement(String nomEvenement, LocalDate dateDebutEvenement, LocalDate dateFinEvenement, long nbAteliers) {
        this.nomEvenement = nomEvenement;
        this.dateDebutEvenement = dateDebutEvenement;
        this.dateFinEvenement = dateFinEvenement;
        this.nbAteliers = nbAteliers;
    }
    public long getIdEvenement() {
        return idEvenement;
    }

    public void setIdEvenement(long idEvenement) {
        this.idEvenement = idEvenement;
    }

    public String getNomEvenement() {
        return nomEvenement;
    }

    public void setNomEvenement(String nomEvenement) {
        this.nomEvenement = nomEvenement;
    }

    public LocalDate getDateDebutEvenement() {
        return dateDebutEvenement;
    }

    public void setDateDebutEvenement(LocalDate dateDebutEvenement) {
        this.dateDebutEvenement = dateDebutEvenement;
    }

    public LocalDate getDateFinEvenement() {
        return dateFinEvenement;
    }

    public void setDateFinEvenement(LocalDate dateFinEvenement) {
        this.dateFinEvenement = dateFinEvenement;
    }

    public long getNbAteliers() {
        return nbAteliers;
    }

    public void setNbAteliers(long nbAteliers) {
        this.nbAteliers = nbAteliers;
    }
}

