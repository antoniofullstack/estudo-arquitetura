# API Monolítica com Express.js (Hexagonal / Ports & Adapters)

Exemplo simples de API REST em arquitetura **monolítica**, organizada no
padrão **Hexagonal (Ports & Adapters)**: o núcleo da aplicação (domínio +
casos de uso) não conhece detalhes de infraestrutura (HTTP, banco de
dados); toda comunicação externa passa por **ports** (contratos) e
**adapters** (implementações concretas desses contratos).

- **Domain (`domain/`)**: entidades do negócio, sem dependências externas.
- **Application (`application/`)**:
  - `use-cases/`: regras de negócio (casos de uso), depende apenas de ports.
  - `ports/`: contratos que o núcleo espera que o mundo externo implemente
    (ex.: `UsersRepositoryPort`).
- **Adapters (`adapters/`)**:
  - `in/http`: adapter primário (driving) — recebe requisições HTTP
    (rotas/controllers) e aciona os casos de uso.
  - `out/persistence`: adapter secundário (driven) — implementa o port de
    repositório (aqui, em memória; poderia ser trocado por um banco real
    sem alterar o núcleo da aplicação).
- **Config (`config/`)**: composition root — instancia os adapters
  concretos e os injeta nos casos de uso (inversão de dependência).

## Estrutura

```
src/
├── app.js                                       # Monta a instância do Express a partir de um router
├── server.js                                     # Ponto de entrada, sobe o servidor HTTP
├── config/
│   └── container.js                               # Composition root: liga adapters ao núcleo
├── domain/
│   └── user.js                                     # Entidade de domínio
├── application/
│   ├── ports/
│   │   └── users-repository.port.js                # Port de saída (contrato de persistência)
│   └── use-cases/
│       └── users.service.js                        # Casos de uso / regras de negócio
└── adapters/
    ├── in/
    │   └── http/
    │       ├── routes.js                             # Agrega as rotas HTTP
    │       ├── users.routes.js                       # Rotas de usuários
    │       ├── users.controller.js                   # Controller HTTP (adapter primário)
    │       └── middlewares/
    │           └── errorHandler.js                    # Tratamento de erros HTTP
    └── out/
        └── persistence/
            └── in-memory-users.repository.js          # Adapter secundário (implementa o port)
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
