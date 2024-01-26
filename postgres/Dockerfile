# Utiliza una imagen base de PostgreSQL
FROM postgres:latest

# Copia tu archivo de configuración personalizado, si es necesario
# COPY ./path/to/your/pg_conf_file.conf /etc/postgresql/postgresql.conf

# Modifica el archivo de configuración para que PostgreSQL escuche en el puerto 4333
RUN echo "port = 5433" >> /etc/postgresql/postgresql.conf

# Exponer el puerto 4333
EXPOSE 5433

# Comando para iniciar el servidor de PostgreSQL
CMD ["postgres", "-c", "config_file=/etc/postgresql/postgresql.conf"]