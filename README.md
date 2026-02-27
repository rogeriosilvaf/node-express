# To-Do List API

API REST para gerenciamento de tarefas (to-do list), desenvolvida em **Node.js** com **Express**, seguindo uma arquitetura em camadas (Router → Controller → Service → Repository).

Evoluções futuras: banco de dados, testes, autenticação e deploy.

---

## Funcionalidades

- Criar uma tarefa
- Listar todas as tarefas
- Atualizar uma tarefa
- Deletar uma tarefa
- Regras de negócio:
  - Tarefas finalizadas (`COMPLETED`) não podem ser editadas
  - Tarefas finalizadas (`COMPLETED`) não podem ser deletadas
  - Título é obrigatório na criação da tarefa

---

## Arquitetura

O projeto segue separação de responsabilidades:
```
src/
 ├── controllers/   # Camada HTTP (req / res)
 ├── services/      # Regras de negócio
 ├── repositories/  # Acesso aos dados (em memória)
 ├── routers/       # Definição das rotas
 ├── app.js         # Configuração da aplicação
 └── server.js      # Inicialização do servidor
```
---

## Como Executar o Projeto

Pré-requisitos

- Node.js (v18 ou superior)
- npm

## Passos

### Instalar dependências
npm install

### Executar o servidor
npm run dev

---

(Em desenvolvimento...)
