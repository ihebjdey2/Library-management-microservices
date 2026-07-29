package com.example.gateway;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudConfig {
    @Bean
    public RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {
        return builder.routes()
                // Micro-service 1
                .route("Emprunt", r -> r.path("/EmpruntService/**")
                        .uri("http://localhost:8182/"))
                .route("Livree", r -> r.path("/LiService/**")
                        .uri("http://localhost:8183/"))
                .route("Reservation", r -> r.path("/ReservationService/**")
                        .uri("http://localhost:8184/"))
                .route("Abonnement", r -> r.path("/AbonnementService/**")
                        .uri("http://localhost:8009/"))
                .route("Evenement", r -> r.path("/Evenement/**")
                        .uri("http://localhost:8888/"))
                .build();
    }
}
