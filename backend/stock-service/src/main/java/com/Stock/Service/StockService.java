package com.Stock.Service;



import com.Stock.Repositories.StockRepository;
import com.Stock.entities.Stock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockService {
    @Autowired
    private StockRepository stockRepository;
    public Stock addStock(Stock s) {
        return stockRepository.save(s);
    }
    public Stock updateStock(Long id, Stock newStock) {if (stockRepository.findById(id).isPresent()) {
        Stock existingStock = stockRepository.findById(id).get();
        existingStock.setIdstock(newStock.getIdstock());
        existingStock.setreferencestock(newStock.getreferencestock());
        existingStock.setNbrcopie(newStock.getNbrcopie());
        existingStock.setCout_achat((newStock.getCout_achat()));
        return stockRepository.save(existingStock);
    } else
        return null;
    }
    public String deleteStock(long id) {
        if (stockRepository.findById(id).isPresent()) {
            stockRepository.deleteById(id);
            return "Stock supprimé";
        } else
            return "Stock non supprimé";
    }
    public List<Stock> findAll(){return stockRepository.findAll();}}

