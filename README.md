# Guia de Uso - Docker e Docker Compose

Este repositório contém exemplos de como criar uma **imagem Docker** a partir de um `Dockerfile` e como rodar serviços utilizando **docker-compose**.


## 🚀 Criando uma imagem com Dockerfile

O diretório `dockerfile-nginx-ubuntu-example/` contém um `Dockerfile` baseado em **Ubuntu** com configuração para **NGINX**.

### Passos:

1. Acesse o diretório onde está o `Dockerfile`:
   ```bash
   cd dockerfile-nginx-ubuntu-example

    docker image build -t meu-nginx .


## 🚀 Subindo os containers do docker-compose

O diretório `docker-compose-example/` contém um `docker-compose.yml`.

### Passos:

1. Acesse o diretório onde está o `docker-compose.yml`:
   ```bash
   cd docker-compose-example

   docker compose up

