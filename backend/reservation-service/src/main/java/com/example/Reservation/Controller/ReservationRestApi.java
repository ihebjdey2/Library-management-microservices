package com.example.Reservation.Controller;

import com.example.Reservation.Entity.Reservation;
import com.example.Reservation.Services.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/Reservation")
@RestController
public class ReservationRestApi {
    @Autowired
    private ReservationService candidatService;
    @GetMapping("findAllLiv")
    List<Reservation> findAll() {
        return candidatService.findAll();
    }
    @PostMapping(value="/ajouterRes" ,consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Reservation> createCandidat(@RequestBody Reservation candidat) {
        return new ResponseEntity<>(candidatService.addCandidat(candidat), HttpStatus.OK);
    }
    @PutMapping(value = "UpdateRes/{idLivre}", produces = MediaType.APPLICATION_JSON_VALUE)

    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Reservation> updateCandidat(@PathVariable(value = "idLivre") int idLivre,
                                                @RequestBody Reservation candidat){
        return new ResponseEntity<>(candidatService.updateCandidat(idLivre, candidat),
                HttpStatus.OK);
    }
    @DeleteMapping(value = "DeleteRes/{idR}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, String>> deleteCandidat(@PathVariable(value = "idR") int idEmprunt) {
        String result = String.valueOf(candidatService.deleteCandidat(idEmprunt));

        Map<String, String> response = new HashMap<>();
        if (result.contains("supprimé")) {
            response.put("message", "Emprunt supprimé");
            return ResponseEntity.ok(response);
        } else {
            response.put("error", result);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }
}
