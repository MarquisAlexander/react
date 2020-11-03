<h2 align="center">
    🚀 Desafio Técnico
</h2>

<p align="center">
    <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-informações">Informações</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-layout">Layout</a>
</p>

As instruções para rodar a aplicação está no final do readme

## :rocket: Tecnologias

Esse projeto fou desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
  - [useCallback, useState, useContext](https://pt-br.reactjs.org/docs/hooks-reference.html)
- [TypeScript](https://typescriptlang.org)
- [Node.js](https://nodejs.org/en/)

Extras:

- Main Libs
    - [React-navigation](https://reactnavigation.org/)
    - [Yup](https://www.npmjs.com/package/yup)
    - [Unform](https://unform.dev/)
    - [Axios](https://www.npmjs.com/package/axios)
    - [Styled-components](https://styled-components.com/)

## 🤔 Informações

Olá, tudo bom, bem, como uma etapa do processo, esse é meu pull request, quero deixar alguns esclarecimentos, primeiro, gostei muito do desafio proposto, foi uma ótima aventura desenvolver tudo isso, um aplicação back e front-end com alguns desafios bem interessantes...

## observações sobre o back-end
No desafio um requisito era utilizar o laravel, como não tenho um bom conhecimento com laravel, optei por utilizar o nodeJS.
Como solicitado no desafio, para criar o cadastro de evento e o cadastro de ingressos, fui capas de desenvolver uma api com rotas para criar os eventos, com todos os campos solicitados(nome, data, categoria e descrição), e também criei um rota para o cadastro de ingressos para cada evento nessa rota algumas informações(nome, valor, setor) são solicitadas, tendo em vista atrelar o ingresso a um determinado evento, no momento da criação do ingresso é necessário inserir o id do evento e assim no futuro podemos fazer selects e ver quais ingressos estão atrelados aquele determinado evento.

## observações sobre Front-end
Como solicitado no desafio, com a aplicação mobile você pode ver todos os eventos criados, criar uma tela para criar novos eventos não estava explicitamento solicitada na descrição do desafio, mas eu achei que era interessante criar essa página e permitir que qualquer usuário possa criar seu próprio evento, assim na aplicação que desenvolvi ele é capas de listar todos os evento e também permite que o usuário crie novos eventos.
Por mais que a api esteja trabalhando com a criação de ingressos, não conseguir de maneira fácil, fazer a listagem do ingresso dentro do evento.

## 🖼 Layout

<img src="https://user-images.githubusercontent.com/51330232/97932788-a30b9800-1d4f-11eb-9609-d2239a4ccba1.jpg" width="450"/>
<img src="https://user-images.githubusercontent.com/51330232/97932792-a43cc500-1d4f-11eb-90ce-65a665d2fb72.jpg" width="450"/>

### :muscle: Quem deu aquela força para não desistir?

O turma da Rocketseat lá do discord deram aquela mão quando as coisas ficaram ruins e me salvaram, sem me deixar desistir!

README feito com ❤️ by **Meus amigos e MarquisAlexander**

Sei que a aplicação não ficou 100% isso você pode imaginar como falta de comprometimento da minha parte, visto eu só visualizei o e-mail no domingo as 23:00h, deste então desculpa pela falta de responsabilidade!!


## Rodar aplição

Back-end

Para rodar a api, você precisa entrar na pasta backend e rodar `npm install` ou `yarn install` ou o seu gerenciador de pacotes preferido.

Logo após certifiquese de ter um banco postgres, vá até o arquivo [ormconfig.json]() e altere as informações para que assim a api seja capaz de se conectar com o banco.

Logo em seguida, rode o `yarn typeorm migration:run é isso no backend

Front-end

Assim como o backend, primeiro você entra na pasta mobile e roda um npm install ou yarn install ou o seu gerenciador de pacotes preferido.

Depois basta rodar um npx react-native run-android e logo em seguida um npx react-native start

Lembrando, para que a aplição seja capas de se conectar com a api você precisa alterar o arquivo api.ts que fica em mobile/src/services, altere a `baseURL: 'http://ip_da_maquina:3333'` colocando o ip local da sua máquina no lugar descrito ["ip_da_maquina"]().