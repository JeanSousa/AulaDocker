# Imagem base
FROM ubuntu:22.04

# Evita prompts interativos do apt
ENV DEBIAN_FRONTEND=noninteractive

# Atualiza pacotes e instala Nginx
RUN apt-get update && \
    apt-get install -y nginx && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Expõe a porta 80
EXPOSE 80

# Comando para rodar o Nginx em foreground
CMD ["nginx", "-g", "daemon off;"]
