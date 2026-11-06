# Tasks API

Uma API REST simples para gerenciamento de tarefas, desenvolvida com **Node.js** e **Express**.

O projeto utiliza um array de objetos em memória para armazenar tarefas e oferece operações básicas de consulta e criação. Foi desenvolvido como prática de construção de APIs com Express.

## Tecnologias

- Node.js
- Express 5

## Funcionalidades implementadas

- Rota inicial para verificar se a API está funcionando.
- Listagem de tarefas.
- Filtragem de tarefas por status de conclusão.
- Filtragem de tarefas por categoria.
- Consulta de uma tarefa pelo ID (rota criada; requer correção para retornar os resultados corretamente).
- Cadastro de novas tarefas com validação dos campos obrigatórios.

## Como executar

### Pré-requisitos

- Node.js 18 ou superior
- npm

### Instalação

Clone o repositório e entre na pasta do projeto:

```bash
git clone <URL_DO_REPOSITORIO>
cd projeto_api
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
npm start
```

Por padrão, a API fica disponível em:

```text
http://localhost:3000
```

## Endpoints

### `GET /`

Verifica se a API está ativa.

**Exemplo de resposta:**

```json
{
  "message": "API em node express está funcionando!"
}
```

### `GET /tasks`

Retorna a lista de tarefas.

Também permite filtrar por status e categoria usando query parameters.

**Exemplos:**

```http
GET /tasks
GET /tasks?completed=true
GET /tasks?completed=false
GET /tasks?category=Estudos
GET /tasks?completed=false&category=Estudos
```

### `GET /tasks/:id`

Rota destinada à consulta de uma tarefa específica pelo ID.

**Exemplo:**

```http
GET /tasks/1
```

> Atenção: na versão atual do código, essa rota ainda precisa ser corrigida para retornar a tarefa encontrada e responder adequadamente quando o ID não existir.

### `POST /tasks`

Cadastra uma nova tarefa.

**Exemplo de corpo da requisição:**

```json
{
  "title": "Estudar Node.js",
  "category": "Estudos"
}
```

**Resposta esperada para uma criação bem-sucedida (`201 Created`):**

```json
{
  "id": 6,
  "title": "Estudar Node.js",
  "completed": false,
  "category": "Estudos"
}
```

Os campos `title` e `category` são obrigatórios. Caso algum deles não seja informado, a API retorna `400 Bad Request`.

## Modelo de tarefa

Cada tarefa segue esta estrutura:

```json
{
  "id": 1,
  "title": "Estudar API",
  "completed": false,
  "category": "Estudos"
}
```

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | Number | Identificador da tarefa |
| `title` | String | Título da tarefa |
| `completed` | Boolean | Indica se a tarefa foi concluída |
| `category` | String | Categoria da tarefa |

## Armazenamento

Atualmente, as tarefas são armazenadas em um array na memória da aplicação. Isso significa que os dados voltam ao estado inicial sempre que o servidor é reiniciado.

O projeto ainda não utiliza banco de dados.

## Próximas melhorias

- [ ] Corrigir a rota `GET /tasks/:id`.
- [ ] Implementar a busca por texto usando o parâmetro `search`.
- [ ] Criar rota `PATCH /tasks/:id` para atualizar uma tarefa.
- [ ] Criar rota `DELETE /tasks/:id` para excluir uma tarefa.
- [ ] Melhorar as validações dos dados recebidos.
- [ ] Implementar tratamento centralizado de erros.
- [ ] Persistir os dados em um banco de dados.
- [ ] Adicionar testes automatizados para as rotas.

## Objetivo do projeto

Praticar os fundamentos do desenvolvimento Back-end com Node.js e Express, incluindo criação de rotas, métodos HTTP, recebimento de parâmetros e manipulação de dados em uma API REST.

---

Projeto desenvolvido para fins de estudo e evolução em desenvolvimento Back-end.
