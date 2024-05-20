# b2bit-task

# 💻 Website - LABEDDIT - FRONT END

📝 Descrição do Projeto
Desenvolvimento de projeto de front end de uma aplicação web com tela de login e uma página de perfil protegida apenas para quem possui credenciais. Feito através do consumo de uma API externa utilizando Axios, em uma estrutura de React + Typescript com estilização em Tailwind, e validação de formulário em Formik. Contém ainda alguns testes de componente utilizando React Testing Library.

 🔗[Deploy](https://labeddit-front-gzrqi60sj-marcela-celani.vercel.app/login)


## Informação Geral

Acesso Rápido
* [Detalhes do Projeto](#detalhes-do-projeto)
* [Tecnologias](#tecnologias)
* [Executando o projeto localmente](#executando-o-projeto-localmente)

## Tecnologias
👩🏻‍💻 Este projeto foi criado utilizando as seguintes ferramentas:

* Criação da estrutura do projeto com Vite
* React.Js e React Router DOM
* TypeScript
* Tailwind
* React Hooks (UseState, UseEffect, useNavigate, useFormik, useProtectedPage)
* Requisição e respota de API com axios
* LocalStorage do navegador
* Testes de componente com React Testing Library

## Detalhes do Projeto

Este projeto possui 2 telas (páginas) interativas:

1. Login
    - Onde o usuário pode preencher o formulário de login e entrar na área protegida da aplicação (apenas usuários logados possuem acesso) utilizando as credenciais válidas pela API (feedbacks de validação de formulário também são apresentadas na tela)

2. Perfil
    - Onde o usuário pode visualizar seus dados como nome, email e avatar
    - ou o usuário pode sair da aplicação clicando no botão de Logout no canto superior da tela, deslogando e perdendo o acesso a área protegida (que não pode ser acessada sem que o token de autenticação esteja válido)

    
## Executando o projeto localmente
### Prè-requisitos:

- Node.js
- npm

1. Clone este repositório:
```
git clone https://github.com/marcela-celani/labeddit-front-end.git
```

2. Instale as dependências:
```
cd front-end
```
```
npm install
```

3. Inicie a aplicação localmente para ver em seu navegador:
```
npm run dev
```

4. Ou acesse diretamente utilizando este: 🔗[Link do Deploy](https://labeddit-front-gzrqi60sj-marcela-celani.vercel.app/login)