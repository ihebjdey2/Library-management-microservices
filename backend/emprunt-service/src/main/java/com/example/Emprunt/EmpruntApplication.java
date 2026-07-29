package com.example.Emprunt;

import com.example.Emprunt.Entity.Emprunt;
import com.example.Emprunt.Repository.EmpruntRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
@EnableEurekaClient
public class EmpruntApplication {

    public static void main(String[] args) {
        SpringApplication.run(EmpruntApplication.class, args);
    }
    @Autowired
    private EmpruntRepository repository;
    @Bean
    ApplicationRunner init() {
        return (args) -> {
// save
            LocalDate currentDate = LocalDate.now();
          // repository.save(new Emprunt("Mariem", currentDate,currentDate));
           // repository.save(new Emprunt("Sarra", "ab", "sa@esprit.tn"));
            //repository.save(new Emprunt("Mohamed", "ba", "mo@esprit.tn"));
// fetch
            repository.findAll().forEach(System.out::println);

        };
    }
}
