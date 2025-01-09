# Demo de Autenticação Social com Firebase

O arquivo de configuração do Firebase está em @/lib/firebase/app.ts e espera um firebase.secret.json na raíz do projeto

## Autenticação Social

O fluxo de autenticação segue da seguinte forma:

1 - Continuar com Google: Gera o Firebase ID Token com as informações da conta que a pessoa informou

2 - Verificar se está registrado: consumir /login pra verificar se o usuário já é paciente ou provedor
2.1 - Caso retorne 200 o usuário possui conta e já está autenticado
2.2 - Caso não possuir retorna 404

3 - Registrar usuário como paciente ou provedor
3.1 - Armazenar o ID Token do firebase
3.2 - Pegar as informações necessárias para registrar como paciente ou provedor
3.3 - Enviar firebaseIdToken junto com as informações específicas de paciente ou provedor no corpo da requisição

## Implementação

O consumo da API está sendo feito com React-query, com funções geradas pelo Orval baseado na documentação Swagger
