# API
## Product

O recurso Product é protegido e só pode ser acessado por usuários cadastrados.
Para acessar o recurso Product usando a API é necessário utilizar o cabeçalho
Authorization ao realizar uma requisição, usando seu token de acesso pessoal:
```
Authorization: Bearer SEU_TOKEN_DE_ACESSO
```
Para conseguir um token basta criar um na seção tokens. Você deve dar um nome
ao seu token para identifica-lo. Ao criar um token, ele será mostrado apenas
uma vez, ao sair da pagina onde seu token é mostrado, não há como recupera-lo.
Você pode criar quantos tokens quiser.

#### GET - /api/product

Retorna uma listagem de todos os produtos cadastrados no sistema, exemplo:
```json
[
    {
        "id": 1,
        "name": "Martelo",
        "description": "Um martelo",
        "price": 10.99,
        "quantity": 0,
        "created_at": "2021-05-18T05:09:40.000000Z",
        "updated_at": "2021-05-18T05:09:40.000000Z"
    },
    {
        "id": 2,
        "name": "Prego",
        "description": "Um prego",
        "price": 0.5,
        "quantity": 0,
        "created_at": "2021-05-18T05:10:50.000000Z",
        "updated_at": "2021-05-18T05:10:50.000000Z"
    },
    {
        "id": 3,
        "name": "Parafuso",
        "description": "Um parafuso",
        "price": 0.5,
        "quantity": 0,
        "created_at": "2021-05-18T05:11:00.000000Z",
        "updated_at": "2021-05-18T05:11:00.000000Z"
    }
]
```

#### POST - /api/product

Insere o produto especificado no corpo da requisição e retorna o recurso criado.

- Exemplo de corpo:
```json
{
    "name" : "Parafuso",
    "price" : 0.50,
    "description" : "Um parafuso"
}
```

- Exemplo de retorno:
```json
{
    "name": "Parafuso",
    "price": 0.5,
    "description": "Um parafuso",
    "updated_at": "2021-05-18T05:13:41.000000Z",
    "created_at": "2021-05-18T05:13:41.000000Z",
    "id": 3
}
```

#### PATCH - /api/product/{id}

Muda os valores do recurso de id igual a {id} pelos valores especificados no
corpo da requisição e então retorna o recurso atualizado.

- Exemplo de URL:
```
/api/product/1
```

- Exemplo de corpo:
```json
{
    "name" : "Parafuso",
    "price" : 2.00,
    "description" : "Um parafuso grande"
}
```

- Exemplo de retorno:
```json
{
    "id": 3,
    "name": "Parafuso",
    "description": "Um parafuso grande",
    "price": 2,
    "quantity": 0,
    "created_at": "2021-05-18T05:13:41.000000Z",
    "updated_at": "2021-05-18T05:17:29.000000Z"
}
```
