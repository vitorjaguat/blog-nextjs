# notes on technology

## Summary

This is a blog structure built from scratch using Next.js 13 and Tailwind CSS.

## Description

Este projeto consiste em um blog ou revista que pode ser atualizado pela criação de novos posts. As pessoas usuárias podem criar um nome de usuárie e senha. Estando logadas, podem criar novos posts, editar os posts já existentes e deletar posts. Na página de edição/criação de posts, a pessoa usuária pode usar a linguagem Markdown para formatar os textos. Também é possível adicionar imagens aos posts. Markdown é uma linguagem fácil de aprender para usuáries com pouco ou nenhum conhecimento técnico. Com ela, pode-se facilmente adicionar títulos em destaque, listas numeradas, itálico, negrito e outras formatações. Há alguns posts no próprio blog que explicam como usar esse recurso.
O recurso de edição presente neste projeto foi motivado pela demanda de um cliente que expressou a necessidade de poder editar e publicar o seu próprio conteúdo. Apenas usuáries logades podem modificar o conteúdo da plataforma. A solução que criei possibilita, inclusive, que a manutenção don conteúdo do site seja feita por um grupo de pessoas, de forma coletiva.

## Especificações técnicas

O projeto foi escrito na sintaxe do React 18, usando a estrutura de rotas do Next.js 13.
Para os estilos, foi usado o Tailwind CSS integrado ao Next.js. A página é totalmente responsiva, e todos os elementos podem ser visualizados em dispositivos como computadores, celulares e tablets. O header da página inicial contém animações ativadas por React Framer Motion.
Para o armazenamento em tempo real de dados, foi usado Firebase Firestore. Para o armazenamento dos usuários e dados de autenticação, foi usado Firebase Auth. Dessa forma, os dados adicionados pelos usuários persistem e podem ser acessados de qualquer dispositivo.
As rotas que levam à criação de novos posts e edição do conteúdo dos posts existentes são protegidas de duas formas: client-side, a aplicação direciona usuários não-logados para a página de login; server-side, o banco de dados só aceita requisições do tipo GET de usuários não-logados. Assim, os usuários não-logados podem ler o conteúdo dos posts, mas não podem editar o conteúdo.
Num contexto de produção, os links e rotas para a edição de conteúdo pode ser protegida, garantindo-se o acesso apenas para os editores do blog/revista.
Dessa forma, essa solução une o melhor de dois mundos: por um lado, há a rapidez de uma aplicação feita em React/Next.js; por outro lado, há a interatividade e facilidade de alimentação de conteúdo existente nos websites hospedados em plataformas como Wordpress, Wix, etc. - e sem a necessidade de pagamento por esses serviços.
