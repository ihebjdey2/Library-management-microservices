package com.example.Reservation;

import com.example.Reservation.Entity.Reservation;
import com.example.Reservation.Repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableEurekaClient
public class ReservationApplication {

    public static void main(String[] args) {
        SpringApplication.run(ReservationApplication.class, args);
    }
    @Autowired
    private ReservationRepository repository;
    @Bean
    ApplicationRunner init() {
        return (args) -> {
// save
       /*     repository.save(new Reservation("Mariem", "Ch", "ma@esprit.tn"));
            repository.save(new Reservation("Sarra", "ab", "sa@esprit.tn"));
            repository.save(new Reservation("Mohamed", "ba", "mo@esprit.tn"));
// fetch*/
            repository.findAll().forEach(System.out::println);

        };
    }
}
