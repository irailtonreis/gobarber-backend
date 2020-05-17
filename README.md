<h1 align=center > Gobaber</h1>
<h2 align=center > 🚀Aplicação aulas práticas Bootcamp🚀</h2>

## Escopo

A aplicação como base uma barbearia para conectar clientes com provedores de serviços permitindo que o cliente possa fazer um agendamento dentro do horário de atendimento.

## Insomnia
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=teste&uri=https%3A%2F%2Fraw.githubusercontent.com%2Firailtonreis%2Fgobarber-backend%2Fmaster%2Fapi-insomnia.json)
## 💻 Tecnologias
- Node.js
- Express
- Nodemon
- Sequelize
- Postgres
- MongoDB
- Eslint
- Prettier
- Yup
- Mongoose
- Jwt
- Date-fns
- Insomnia
- Multer
- Nodemailer

### 1. Registro de usuário
<img src='/images/create-user.gif' width='850px'>

### 2. Registro de provider
<img src='/images/create-provider.gif' width='850px'>

### 3. Criar sessão
<img src='/images/user-session.gif' width='850px'>

### 4. Criar avatar
<img src='/images/create-avatar.gif' width='850px'>

### 5. Listagem prestadores de serviço
<img src='/images/list-provider.gif' width='850px'>

### 6. Create agendamento
<img src='/images/create-appointment.gif' width='850px'>

### 7. Cancelando agendamento
<img src='/images/cancel-appointment.gif' width='850px'>

### 8. Listagem diária
<img src='/images/list-schedule.gif' width='850px'>

### 9. Listagem horários disponíveis
<img src='/images/list-avaliable.gif' width='850px'>

## Instalar
```sh
yarn install
```
## Configurar variáveis de ambiente .env.example
```sh
APP_URL=http://localhost:8080
NODE_ENV=development

# Auth

APP_SECRET=

# Database

DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=

# Mongo

MONGO_URL=

# Redis

REDIS_HOST=127.0.0.1
REDIS_PORT=6379


# Mail
MAIL_HOST=
MAIL_PORT=
MAIL_USER=
MAIL_PASS=


# Sentry
SENTRY_DSN=

```

## Conectar base dados postgres através do docker
```sh
 docker run --name database -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -d postgres
```

## Uso

```sh
yarn run dev
```



