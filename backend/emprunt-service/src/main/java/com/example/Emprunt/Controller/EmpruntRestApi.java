package com.example.Emprunt.Controller;

import com.example.Emprunt.Entity.Emprunt;
import com.example.Emprunt.Services.EmpruntService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/Emprunt")
public class EmpruntRestApi {
    @Autowired
    private EmpruntService empruntService;
    @GetMapping("findAllF")
    List<Emprunt> findAll() {
        return empruntService.findAll();
    }
    @PostMapping(value="/ajouterEmprunt",consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Emprunt> createCandidat(@RequestBody Emprunt emprunt) {
        return new ResponseEntity<>(empruntService.addCandidat(emprunt), HttpStatus.OK);
    }
    @PutMapping(value = "UpdateEmprunt/{idEmprunt}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Emprunt> updateCandidat(@PathVariable(value = "idEmprunt") int idEmprunt,
                                                  @RequestBody Emprunt emprunt){
        return new ResponseEntity<>(empruntService.updateCandidat(idEmprunt, emprunt),
                HttpStatus.OK);
    }
    @DeleteMapping(value = "DeleteEmp/{idEmprunt}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, String>> deleteCandidat(@PathVariable(value = "idEmprunt") int idEmprunt) {
        String result = String.valueOf(empruntService.deleteCandidat(idEmprunt));

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
