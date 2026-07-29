package com.example.Livre.Controller;

import com.example.Livre.Entity.Livre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/Livre")
@RestController
public class LivreRestApi {
    @Autowired
    private com.example.Livre.Services.LivreService candidatService;

    @GetMapping("findAllLiv")
    List<Livre> findAll() {
        return candidatService.findAll();
    }
    @PostMapping(value="/ajouterLivre" ,consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Livre> createCandidat(@RequestBody Livre candidat) {
        return new ResponseEntity<>(candidatService.addCandidat(candidat), HttpStatus.OK);
    }
    @PutMapping(value = "UpdateLivre/{idLivre}", produces = MediaType.APPLICATION_JSON_VALUE)

    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Livre> updateCandidat(@PathVariable(value = "idLivre") int idLivre,
                                                                              @RequestBody Livre candidat){
        return new ResponseEntity<>(candidatService.updateCandidat(idLivre, candidat),
                HttpStatus.OK);
    }
    @DeleteMapping(value = "DeleteLivre/{idLivre}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, String>> deleteCandidat(@PathVariable(value = "idLivre") int idEmprunt) {
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
