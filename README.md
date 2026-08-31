# API Monolítica com Express.js (MVC)

Exemplo simples de API REST em arquitetura **monolítica**, organizada no
padrão **MVC (Model-View-Controller)**: toda a aplicação roda em um único
processo/deploy, com as responsabilidades separadas em camadas dentro do
mesmo projeto.

- **Model**: acesso e regras dos dados (`models/`)
- **View**: formata a saída da API — aqui, o JSON retornado ao cliente (`views/`)
- **Controller**: recebe a requisição, aciona o Model e usa a View para
  montar a resposta (`controllers/`)

## Estrutura

```
src/
├── app.js                 # Configuração do Express (middlewares e rotas)
├── server.js               # Ponto de entrada, sobe o servidor HTTP
├── routes/
│   ├── index.js             # Agrega as rotas da aplicação
│   └── users.routes.js      # Rotas de usuários
├── controllers/
│   └── users.controller.js  # Orquestra Model e View para cada requisição
├── views/
│   └── users.view.js        # Formata os dados de usuário para JSON
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
