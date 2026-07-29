FROM eclipse-temurin:11-jre
WORKDIR /app
COPY target/msCandidat-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8009
ENTRYPOINT ["java", "-jar", "app.jar"]
