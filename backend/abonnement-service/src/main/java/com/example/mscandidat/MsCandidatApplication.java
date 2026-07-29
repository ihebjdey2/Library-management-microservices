package com.example.mscandidat;

import com.example.mscandidat.Entity.Abonnement;
import com.example.mscandidat.Repository.AbonnementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
@EnableEurekaClient
public class MsCandidatApplication {

    public static void main(String[] args) {
        SpringApplication.run(MsCandidatApplication.class, args);
    }
    @Autowired
    private AbonnementRepository repository;
    @Bean
    ApplicationRunner init() {
        return (args) -> {
         LocalDate currentDate = LocalDate.now();
repository.save(new Abonnement(1, 20, currentDate));
            repository.save(new Abonnement(2, 25, currentDate));
            repository.save(new Abonnement(3, 222, currentDate));
// fetch
            repository.findAll().forEach(System.out::println);

        };
    }
}
