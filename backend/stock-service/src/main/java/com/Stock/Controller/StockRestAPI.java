package com.Stock.Controller;

import com.Stock.Service.StockService;
import com.Stock.entities.Stock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/Stock")
@RestController
public class StockRestAPI {

    @Autowired
    private StockService StockService;

    @GetMapping(value = "/getallstock", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<Stock>> findallstock() {

        List<Stock> stocks = StockService.findAll();// récupérer la liste des stocks
        return ResponseEntity.ok(stocks);
    }

    @PostMapping(value ="/addstock",consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Stock> createStock(@RequestBody Stock Stock) {
        return new ResponseEntity<>(StockService.addStock(Stock), HttpStatus.OK);
    }


    @PutMapping(value = "/updatestock/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    Stock updateStock(@PathVariable("id") Long id ,@RequestBody Stock stock){
        return  StockService.updateStock(id,stock);
    }
    @DeleteMapping(value = "deletestock/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> deleteStock(@PathVariable(value = "id") int id){
        return new ResponseEntity<>(StockService.deleteStock(id), HttpStatus.OK);
    }
}
