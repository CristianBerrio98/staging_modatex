# Utiliza una imagen base de PostgreSQL
FROM postgres:latest

# Copia tu archivo de configuración personalizado
COPY ./postgres/postgresql.conf /etc/postgresql/postgresql.conf

# Exponer el puerto 5433
EXPOSE 5433

# Comando para iniciar el servidor de PostgreSQL
CMD ["postgres", "-c", "config_file=/etc/postgresql/postgresql.conf"]
