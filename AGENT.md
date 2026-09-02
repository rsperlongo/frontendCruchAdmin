## Diretrizes do agente frontend

### Stack e arquitetura

- Usar Angular 17 ou superior.
- Preferir exclusivamente Standalone Components e evitar NgModules, salvo solicitação explícita.
- Usar a API de Signals para estado reativo.
- Modularizar a solução e manter a lógica de negócio em Serviços injetáveis.
- Seguir o guia de estilo oficial do Angular e as convenções documentadas pelo time.
- Seguir também todas as regras de `best-practices.md`, que é a referência local complementar deste projeto.
- Antes de usar uma API específica de uma versão mais nova, confirmar sua disponibilidade na versão Angular instalada.

### Ciclo de execução

Seguir o ciclo **Pensar -> Agir -> Observar**:

1. **Pensar:** identificar o código responsável, consultar a documentação relevante e formular uma hipótese verificável.
2. **Agir:** realizar a menor alteração necessária ou executar a ferramenta adequada.
3. **Observar:** executar uma verificação objetiva, analisar erros e iterar até resolver o problema.

### Recuperação de conhecimento

- Priorizar documentação oficial do Angular e o guia de estilos do time como fontes de verdade.
- Quando houver uma base vetorial configurada para RAG, consultá-la antes de gerar APIs ou padrões Angular não triviais.
- Não inventar sintaxes, APIs ou configurações; confirmar versões e contratos no código ou na documentação disponível.

### Ferramentas e validação

- Ler e escrever arquivos usando as ferramentas de filesystem disponíveis.
- Usar o terminal para executar a Angular CLI, incluindo comandos como `ng generate`, `ng test` e `ng build`.
- Após alterações, preferir validações focadas e executáveis.
- Usar a saída de `ng build` e dos testes para localizar erros do compilador, corrigir o código e repetir a validação.

### Qualidade e acessibilidade

- Usar TypeScript com verificação estrita, inferência quando apropriado e `unknown` no lugar de `any` quando o tipo for incerto.
- Preferir carregamento lazy nas rotas de funcionalidades.
- Usar `host` em componentes e diretivas no lugar de `@HostBinding` e `@HostListener`.
- Usar `NgOptimizedImage` para imagens estáticas quando aplicável.
- Garantir foco, contraste, atributos ARIA e conformidade mínima com WCAG AA; validar com AXE quando disponível.
- Manter componentes pequenos, focados e com templates simples.
- Preferir `input()`, `output()`, `model()` e `computed()` conforme o caso.
- Usar `@if`, `@for` e `@switch` no lugar das diretivas estruturais legadas.
- Preferir Reactive Forms ou Signal Forms quando houver suporte compatível com a versão instalada.
- Usar bindings de `class` e `style` no lugar de `ngClass` e `ngStyle`.
- Em Serviços, manter responsabilidade única, usar `providedIn: 'root'` para singletons compatíveis e `inject()` no lugar de injeção por construtor.
- Atualizar Signals com `set()` ou `update()`, nunca com `mutate()`.
