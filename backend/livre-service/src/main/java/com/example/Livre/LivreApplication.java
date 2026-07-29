package com.example.Livre;

import com.example.Livre.Repository.LivreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;


@SpringBootApplication
@EnableEurekaClient
public class LivreApplication {

    public static void main(String[] args) {
        SpringApplication.run(LivreApplication.class, args);
    }
    @Autowired
    private LivreRepository repository;
    @Bean
    ApplicationRunner init() {
        return (args) -> {
LocalDate currentDate = LocalDate.now();
            repository.save(new com.example.Livre.Entity.Livre("nomLivre","auteur","MaisonEdition",7,7,currentDate));
 /*           repository.save(new com.example.mscandidat.Entity.Livre("Sarra", "ab", "sa@esprit.tn"));
            repository.save(new com.example.mscandidat.Entity.Livre("Mohamed", "ba", "mo@esprit.tn"));
// fetch*/
            repository.findAll().forEach(System.out::println);

        };
    }
}
