# notes on technology

## Summary

[ EN ] Blog structure built from scratch using Next.js 13 and Tailwind CSS.

[ PT ] Estrutura de blog construída do zero usando Next.js 13 e Tailwind CSS.

## Description

[ EN ] This project consists of a blog or magazine that can be updated by creating new posts. Users can create a username and password. Once logged in, they can create new posts, edit existing posts and delete posts. On the post editing/creation page, the user can use the Markdown language to format the texts. It is also possible to add images to posts. Markdown is an easy-to-learn language for users with little or no technical knowledge. With it, you can easily add highlighted headings, numbered lists, italics, bold, and other formatting. There are some posts on the blog itself that explain how to use this feature.

The editing feature present in this project was motivated by the demand of a client who expressed the need to be able to edit and publish his own content. Only logged in users can modify the content of the platform. The solution I created even makes it possible for a group of people to maintain the site's content collectively.

[ PT ] Este projeto consiste em um blog ou revista que pode ser atualizado pela criação de novos posts. As pessoas usuárias podem criar um nome de usuárie e senha. Estando logadas, podem criar novos posts, editar os posts já existentes e deletar posts. Na página de edição/criação de posts, a pessoa usuária pode usar a linguagem Markdown para formatar os textos. Também é possível adicionar imagens aos posts. Markdown é uma linguagem fácil de aprender para usuáries com pouco ou nenhum conhecimento técnico. Com ela, pode-se facilmente adicionar títulos em destaque, listas numeradas, itálico, negrito e outras formatações. Há alguns posts no próprio blog que explicam como usar esse recurso.

O recurso de edição presente neste projeto foi motivado pela demanda de um cliente que expressou a necessidade de poder editar e publicar o seu próprio conteúdo. Apenas usuáries logades podem modificar o conteúdo da plataforma. A solução que criei possibilita, inclusive, que a manutenção don conteúdo do site seja feita por um grupo de pessoas, de forma coletiva.

## Technical specifications

[ EN ] The project was written in React 18 syntax, using the Next.js 13 routing framework.

For the styles, Tailwind CSS integrated with Next.js was used. The page is fully responsive, and all elements can be viewed on devices such as computers, cell phones and tablets. The home page header contains animations powered by React Framer Motion.

For real-time data storage, Firebase Firestore was used. For storing users and authentication data, Firebase Auth was used. This way, data added by users persists and can be accessed from any device.

The routes that lead to the creation of new posts and editing the content of existing posts are protected in two ways: client-side, the application directs non-logged-in users to the login page; server-side, the database only accepts GET requests from non-logged in users. Thus, non-logged in users can read the content of posts, but cannot edit the content.
In a production context, links and routes for editing content can be protected, guaranteeing access only to blog/magazine editors.

In this way, this solution combines the best of both worlds: on the one hand, there is the speed of an application made in React/Next.js; on the other hand, there is the interactivity and ease of feeding existing content on websites hosted on platforms such as Wordpress, Wix, etc. - and without the need to pay for these services.

[ PT ] O projeto foi escrito na sintaxe do React 18, usando a estrutura de rotas do Next.js 13.

Para os estilos, foi usado o Tailwind CSS integrado ao Next.js. A página é totalmente responsiva, e todos os elementos podem ser visualizados em dispositivos como computadores, celulares e tablets. O header da página inicial contém animações ativadas por React Framer Motion.

Para o armazenamento em tempo real de dados, foi usado Firebase Firestore. Para o armazenamento dos usuários e dados de autenticação, foi usado Firebase Auth. Dessa forma, os dados adicionados pelos usuários persistem e podem ser acessados de qualquer dispositivo.

As rotas que levam à criação de novos posts e edição do conteúdo dos posts existentes são protegidas de duas formas: client-side, a aplicação direciona usuários não-logados para a página de login; server-side, o banco de dados só aceita requisições do tipo GET de usuários não-logados. Assim, os usuários não-logados podem ler o conteúdo dos posts, mas não podem editar o conteúdo.
Num contexto de produção, os links e rotas para a edição de conteúdo pode ser protegida, garantindo-se o acesso apenas para os editores do blog/revista.

Dessa forma, essa solução une o melhor de dois mundos: por um lado, há a rapidez de uma aplicação feita em React/Next.js; por outro lado, há a interatividade e facilidade de alimentação de conteúdo existente nos websites hospedados em plataformas como Wordpress, Wix, etc. - e sem a necessidade de pagamento por esses serviços.

## Demo

https://blog-nextjs-not.vercel.app/
