FROM eclipse-temurin:11-jre
WORKDIR /app
COPY target/Reservation-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8184
ENTRYPOINT ["java", "-jar", "app.jar"]
