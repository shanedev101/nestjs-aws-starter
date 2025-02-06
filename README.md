# NestJS AWS Starter 🚀

A minimal NestJS project with Docker support, ready for deployment on AWS (ECS Fargate or EC2).

## 🛠 Installation

### 1. Clone the repository & install dependencies

```sh
git clone https://github.com/your-repo/nestjs-aws-starter.git
cd nestjs-aws-starter
yarn install
```

### 2. Create an `.env` file from the example

```sh
cp .env.example .env
```

Then update the database information if necessary.

## 🚀 Run locally with Docker

### 1. Start PostgreSQL & App with Docker Compose

```sh
sudo docker-compose up --build
```

### 2. Check the API

```sh
curl http://localhost:3333/ping
```

Or open the browser:

```
http://localhost:3333/ping
```

## 📦 Build & Push Docker Image

### 1. Build the image

```sh
docker build -t nestjs-aws-starter .
```

### 2. Push to Docker Hub or AWS ECR

```sh
docker tag nestjs-aws-starter <your-repo>:latest
docker push <your-repo>:latest
```
