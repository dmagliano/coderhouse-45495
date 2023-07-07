Complementar o trabalho do ecommerce.
- Adicionando mongoose e mongo
- Criar um banco de dados chamado ecommerce
    -criar as collections "carts", "messages", "products".
    -cada uma com seu schema.

- Pasta DAO para o gerenciador de arquivos e mongoDb.
    - DAO = data access object
- Dentro da pasta DAO estarão os schemas na pasta models
- Trocar os serviços para usar o Mongoose ao invés do FileSystem.
- NÃO EXCLUIR O FILE SYSTEM.

- Nova view no handlebars chamada chat.handlebars
- Implementar o chat na view chat.handlbars
    - Para as mensagens, guardar-las na collection "messages" no seguinte formato
    {user:emailDoUsuario, mensagem:mensagem do usuario}