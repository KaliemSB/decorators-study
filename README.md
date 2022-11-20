
## Documentação da API

#### Pagina inicial

```http
  GET /
```

#### Retorna todos os itens

```http
  GET /todo
```

#### Retorna um único item

```http
  GET /todo/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer buscar. |

#### Cria um novo item

```http
  POST /todo
```

| Corpo   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. Nome do item que você quer criar. |
| `description`      | `string` | Descrição do item que você quer criar. |
| `completed`      | `boolean` | Status do item que você quer criar |

#### Atualiza um item

```http
  PATH /todo/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer atualizar. |

| Corpo   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. Nome do item que você quer criar. |
| `description`      | `string` | Descrição do item que você quer criar. |
| `completed`      | `boolean` | Status do item que você quer criar |

#### Deleta um item

```http
  DELETE /todo/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer deletar. |

