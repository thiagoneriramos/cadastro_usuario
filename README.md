# descrição geral

A arquitetura da aplicação será a seguinte:

Aplicação frontend: A aplicação deverá ser desenvolvida utilizando tecnologias de frontend
Javascript, como React, Angular ou VueJS. O aspecto visual fica a critério do candidato, mas este
também será avaliado durante a seleção.

A aplicação deverá possuir as seguintes funcionalidades básicas:

- Página inicial com botões para cadastro e login de usuários
- O cadastro de usuário deverá possuir os seguintes campos
    - Nome completo
    - Email
    - Senha
    - Endereço completo
- Login do usuário com email e senha
- Página “Perfil” para onde o usuário será direcionado após o login com acesso restrito ao
usuário logado
    - Deverá exibir os dados do usuário cadastrado
    - Opção de atualização dos dados cadastrais
    - Opção de remoção do perfil
    - Opção de “logoff” com redirecionamento a página Inicial

# atividade extra (diferencial)
  - Upload de uma foto de perfil e exibição na página do perfil
  - Disponibilização da aplicação em um provedor de cloud como por exemplo AWS ou Google. Os
mesmos possuem período de avaliação gratuita caso o usuário deseje disponibilizar o seu trabalho.

# Para rodar o projeto
- Necessário instalar node >= 4.0.0  e npm >= 3.0.0


# instale as dependencias
npm install

# server em localhost:8080
npm run dev

# observações finais
Por conta do tempo disponivel para execução da avaliação e também da pouca familiaridade com a linguaguem vue.js, somente foi possivel realizar essa parte de login e cadastro, usei bootstrap pois tenho conhecimento nessa parte. Tente usar localstorage no vue pra salvar as credenciais de acesso, mas nao conseguir, porque não tenho tanta familiaridade com a linguaguem. 

