package com.example.eurkaserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
//active projet en tant que serveur de decouverte
@EnableEurekaServer
public class EurkaServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(EurkaServerApplication.class, args);
    }

}
