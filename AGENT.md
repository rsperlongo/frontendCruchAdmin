## Diretrizes do agente frontend

### Stack e arquitetura

- Usar Angular 17 ou superior.
- Preferir exclusivamente Standalone Components e evitar NgModules, salvo solicitação explícita.
- Usar a API de Signals para estado reativo.
- Modularizar a solução e manter a lógica de negócio em Serviços injetáveis.
- Seguir o guia de estilo oficial do Angular e as convenções documentadas pelo time.

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
