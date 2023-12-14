## Running the app

## Objetivo

Este repositório é parte de uma arquitetura de catálogo, projeto que faz parte de uma ação de PDI para aprimorar os conhecimentos de profundidade técnica utilizando diversas tecnologias de backend e frontend.
O objetivo é construir um produto responsável pela gestão do catálogo e também permitir o compartilhamento deste catálogo com clientes.
O projeto terá ao menos 2 microserviços em tecnologias distintas, microfrontends, banco de dados relacional e não relacional e irá utilizar stream de eventos com Kafka.

## Serviço Catálogo

Serviço Catalog Static Generator: este é o serviço responsável por gerar e disponibilizar arquivos estáticos em um bucket s3. Desenvolvido utilizando NestJS.

## Requisitos do sistema

NodeJS >= 20.9.0  
npm >= v10.1.0

## Instalação

Na pasta raíz execute o comando: 

```bash
$ npm install
```
## Executar banco de dados

Com o docker compose instalado, na pasta raíz execute o comando:

```bash
$ docker compose up
```
## Executar aplicação

Na pasta raíz execute o comando: 

```bash
$ npm run dev
```
