## Definições de arquitetura, padrões e design

## Cores
- as cores serão nos tons de azul, sendo os componentes diferenciando e mudando a tonalidade.

## Fontes
- a fonte usada será https://fonts.google.com/specimen/Roboto com
=> font-size: 12px para textos de corpo
=> font-size: 14px para subtítulos
=> font-size: 16px para títulos no header

## Componentes
- design system baseado em Angular Material (https://material.angular.dev/).
- criar os componentes, classes, funções de acordo com o style guide https://angular.dev/style-guide.
- criar componentes reutilizáveis

## Lista de componentes
- Cards
- Menu Lateral
- Form Field
- Badge para notificações
- Button
- SideNav para o menu Lateral usando o Autosize sidenav
- Table with Pagination (Listas e ações)

## Layout

- usar os padrões de lint, prettier ou eslint em todas as classes, funções.
- a tela de login deverá ter a opção de esqueci a senha, usando formulários reativos com mensagens de erros. Também deverá ter um botão para solicitar acesso caso a pessoa não seja ADMIN.
- o componente de login deverá estar no centro.
- o dashboard terá um menu lateral com os menus de acesso para todos os items e subitens de acordo com o perfil do usuário e acesso.
- o header terá o nome usuário que está logado
- a aplicação terá uma plataforma diferenciada para o ADMIN onde somente ele terá acesso e tem como fim principal dar acesso a outros usuários, criar e excluir usuários.

## Regras de negócio:

- a autenticação dos usuários deverá ser baseada no documento https://github.com/rsperlongo/myecommerce-user/blob/main/PROJECT_SUMMARY.md. Bem como as apis que serão consumidas. 

- ao logar o usuário deve ser direcionado ao dashboard de acordo com sua permissão de acesso.
- a aplicação é direcionada para igrejas evangélicas sendo assim terá um cadastro de membros, financeiro, cadastro de liderança, eventos, boletim dominical e página direcionada aos grupos da igreja.
