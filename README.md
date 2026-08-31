# API Monolítica com Express.js

Exemplo simples de API REST em arquitetura **monolítica**: toda a aplicação
(rotas, controllers e modelo de dados) roda em um único processo/deploy,
organizada em camadas dentro do mesmo projeto.

## Estrutura

```
src/
├── app.js                 # Configuração do Express (middlewares e rotas)
├── server.js               # Ponto de entrada, sobe o servidor HTTP
├── routes/
│   ├── index.js             # Agrega as rotas da aplicação
│   └── users.routes.js      # Rotas de usuários
├── controllers/
│   └── users.controller.js  # Lógica das requisições
└── models/
    └── users.model.js       # "Persistência" em memória
```

## Como rodar

```bash
npm install
npm start
```

O servidor sobe em `http://localhost:3000`.

## Endpoints

| Método | Rota          | Descrição              |
|--------|---------------|-------------------------|
| GET    | /health       | Verifica se a API está no ar |
| GET    | /users        | Lista todos os usuários |
| GET    | /users/:id    | Busca um usuário por id |
| POST   | /users        | Cria um usuário (`{ name, email }`) |
| PUT    | /users/:id    | Atualiza um usuário     |
| DELETE | /users/:id    | Remove um usuário       |
