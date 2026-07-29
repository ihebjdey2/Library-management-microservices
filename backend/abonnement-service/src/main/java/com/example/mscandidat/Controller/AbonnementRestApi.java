package com.example.mscandidat.Controller;

import com.example.mscandidat.Entity.Abonnement;
import com.example.mscandidat.Services.AbonnementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("abonnement")
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AbonnementRestApi {
    @Autowired
    private AbonnementService abonnementService;


    @GetMapping(produces =MediaType.APPLICATION_JSON_VALUE )
    @ResponseStatus(HttpStatus.OK)
    public List<Abonnement> findAlAbonnement(){
        return abonnementService.findAlAbonnement();
    }
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Abonnement> createAbonnement(@RequestBody Abonnement abonnement) {
        return new ResponseEntity<>(abonnementService.addAbonnement(abonnement), HttpStatus.OK);
    }
    @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Abonnement> updateAbonnement(@PathVariable(value = "id") int id,
                                                     @RequestBody Abonnement candidat){
        return new ResponseEntity<>(abonnementService.updateAbonnement(id, candidat),
                HttpStatus.OK);
    }
    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> deleteAbonnement(@PathVariable(value = "id") int id){
        return new ResponseEntity<>(abonnementService.deleteAbonnement(id), HttpStatus.OK);
    }
}
