FROM eclipse-temurin:11-jre
WORKDIR /app
COPY target/Livre-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8183
ENTRYPOINT ["java", "-jar", "app.jar"]
