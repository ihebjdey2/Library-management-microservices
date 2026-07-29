FROM eclipse-temurin:11-jre
WORKDIR /app
COPY target/eurkaServer-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8761
ENTRYPOINT ["java", "-jar", "app.jar"]
