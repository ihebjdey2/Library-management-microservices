package tn.esprit.evenement.RestControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.evenement.Entities.Evenement;
import tn.esprit.evenement.Services.EvenementServices;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/Evenement")
public class EvenementRestController {
    @Autowired
    private EvenementServices evenementService;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Evenement> addEvenement(Evenement evenement) {
        return ResponseEntity.ok(evenementService.addEvenement(evenement));
    }
    @PutMapping(value = "updateEvenement/{id}",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Evenement> updateEvenement(@PathVariable(value = "id") long id, @RequestBody Evenement evenement) {
        return ResponseEntity.ok(evenementService.updateEvenement(id, evenement));
    }
    @DeleteMapping(value = "deleteEvenement/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> deleteEvenement(@PathVariable(value = "id") long id) {
        return ResponseEntity.ok(evenementService.deleteEvenement(id));
    }


}
