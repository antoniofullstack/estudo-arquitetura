# API Monolítica com Express.js (Layered / N-camadas)

Exemplo simples de API REST em arquitetura **monolítica**, organizada no
padrão **Layered Architecture (N-camadas)**: toda a aplicação roda em um
único processo/deploy, com as responsabilidades separadas em camadas que só
se comunicam com a camada imediatamente abaixo.

- **Presentation (routes/controllers)**: recebe a requisição HTTP, delega
  para a camada de serviço e devolve a resposta.
- **Service (services)**: regras de negócio e validações, orquestra o
  acesso a dados.
- **Data Access (repositories)**: leitura e escrita dos dados (aqui, em
  memória).
- **Model (models)**: formato/entidade do domínio, usado pelas demais
  camadas.

## Estrutura

```
src/
├── app.js                    # Configuração do Express (middlewares e rotas)
├── server.js                  # Ponto de entrada, sobe o servidor HTTP
├── routes/
│   ├── index.js                # Agrega as rotas da aplicação
│   └── users.routes.js         # Rotas de usuários
├── controllers/
│   └── users.controller.js     # Camada de apresentação (HTTP)
├── services/
│   └── users.service.js        # Camada de negócio (validações e regras)
├── repositories/
│   └── users.repository.js     # Camada de acesso a dados
└── models/
    └── user.js                  # Entidade de domínio
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
