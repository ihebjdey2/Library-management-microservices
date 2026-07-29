FROM eclipse-temurin:11-jre
WORKDIR /app
COPY target/gateway-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8861
ENTRYPOINT ["java", "-jar", "app.jar"]
