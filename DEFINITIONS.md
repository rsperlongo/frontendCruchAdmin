# Definitions

## Angular

Framework frontend usado pelo projeto. A versão principal deve permanecer em Angular 21 ou superior, conforme as dependências declaradas em `package.json`.

## Standalone Component

Componente Angular que declara suas próprias dependências e não precisa ser registrado em um `NgModule`. É o padrão arquitetural deste projeto.

## Signals

API reativa do Angular para representar estado, derivar valores e reagir a mudanças de forma explícita e eficiente.

## Service

Classe injetável responsável por lógica de negócio, acesso a dados, integrações e regras compartilhadas. Componentes devem concentrar a apresentação e a interação com a interface.

## Pensar -> Agir -> Observar

Ciclo operacional do agente:

1. **Pensar:** localizar o código responsável, consultar as fontes confiáveis e formular uma hipótese verificável.
2. **Agir:** aplicar a menor alteração necessária ou executar a ferramenta adequada.
3. **Observar:** executar uma validação objetiva, analisar os resultados e corrigir o problema caso necessário.

## RAG

Geração aumentada por recuperação. Processo de consultar uma base de conhecimento, preferencialmente com documentação oficial do Angular e o guia de estilos do time, antes de gerar soluções não triviais.

## Angular CLI

Ferramenta de linha de comando usada para gerar código, executar o servidor de desenvolvimento, rodar testes e criar builds do projeto. Exemplos: `ng generate`, `ng test` e `ng build`.

## Validação

Execução de verificações objetivas após uma alteração. O build (`ng build`), os testes (`ng test`) e os erros do compilador são fontes para confirmar o comportamento e orientar correções.
