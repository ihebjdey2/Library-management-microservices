package com.Stock;


import com.Stock.Repositories.StockRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class StockApplication {

    public static void main(String[] args) {
        SpringApplication.run(StockApplication.class, args);
    }

    @Autowired
    private StockRepository repository;

    @Bean
    ApplicationRunner init() {
        return (args) -> {

            repository.findAll();
        };
    }

}
