# Utiliza una imagen base de PostgreSQL
FROM postgres:latest

# Establece la variable de entorno para el puerto
ENV POSTGRES_PORT 5433

# Comando para iniciar el servidor de PostgreSQL
CMD ["postgres", "-c", "port=$POSTGRES_PORT"]
