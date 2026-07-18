# Contribuindo para Dados Falsos

Obrigado por considerar contribuir! Aqui estão as diretrizes para tornar o processo simples e eficiente.

## Como Contribuir

1. **Fork** o repositório

2. **Clone** seu fork:

```bash
git clone https://github.com/seu-usuario/insomnia-plugin-dados-falsos.git
cd insomnia-plugin-dados-falsos
```

3. **Instale as dependências de desenvolvimento** (opcional):

```bash
npm install
```

Isso instala TypeScript e @types/node localmente. Se você já tem TypeScript instalado globalmente, pode pular este passo.

4. **Crie uma branch** para sua feature:

```bash
git checkout -b feature/sua-feature
```

5. **Faça suas mudanças** nos arquivos apropriados

6. **Compile e teste**:

```bash
npm run build
npm test
```

7. **Commit** suas mudanças com mensagens claras:

```bash
git commit -m "Add: descrição clara da feature"
```

8. **Push** para sua branch:

```bash
git push origin feature/sua-feature
```

9. **Abra um Pull Request** com descrição detalhada

## Tipos de Contribuição

- 🐛 **Bug fixes**: Correções de erros e problemas
- ✨ **Features**: Novos template tags ou funcionalidades
- 📚 **Documentação**: Melhorias no README, CONTRIBUTING ou comentários
- 🧪 **Testes**: Adicionar testes e validações
- 🎨 **Melhorias**: Refatoração e otimizações de código

## Diretrizes de Código

- Mantenha o código limpo e legível
- Use TypeScript com tipos bem definidos
- Adicione comentários JSDoc para todas as funções
- Siga o padrão de nomenclatura camelCase
- Compile antes de fazer commit: `npm run build`

## Dependências do Projeto

O projeto é **minimalista** com 3 devDependencies:

- **typescript** (^5.0.0): Compilador TypeScript
- **@types/node** (^20.0.0): Tipos do Node.js para Buffer e module
- **tsx** (^4.22.4): Execução direta de TypeScript em testes e scripts

**Sem dependências de produção!** O plugin usa apenas APIs nativas do Node.js.

## Diretrizes de Commit

Use mensagens descritivas seguindo este padrão:

- `Add: nova funcionalidade` - Para novos tags ou features
- `Fix: correção de bug` - Para correções
- `Docs: atualização de documentação` - Para docs
- `Refactor: melhoria de código` - Para refatorações
- `Test: adição de testes` - Para testes

Exemplo:

```bash
git commit -m "Add: novo tag para gerar CNAE"
```

## Reportar Bugs

Abra uma issue descrevendo:

- **Título claro**: Descreva o problema em uma linha
- **Descrição**: O que esperava vs o que aconteceu
- **Passos para reproduzir**: Como replicar o problema
- **Ambiente**: Node.js version, SO, Insomnia version
- **Screenshots**: Se aplicável

## Padrão para Novos Template Tags

Se estiver adicionando um novo tag, siga este padrão:

1. Crie a função geradora em `src/generators/seu-arquivo.ts`:

```typescript
/**
 * Gera meu dado
 * @returns {string} Valor gerado
 */
export function genMeuDado(): string {
  return 'valor gerado';
}
```

2. Importe em `src/constants/templateTags.ts`

3. Adicione à lista `templateTags`:

```typescript
{
  name: 'meuTag',
  displayName: 'dados-falsos → meuTag',
  description: 'Descrição clara do tag',
  args: [],
  run: async () => genMeuDado()
}
```

4. Compile: `npm run build`

5. Teste: `npm test`

6. Atualize o README.md com documentação

## Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob MIT.

## Contribuidores

Agradecemos a todos que contribuem para melhorar o Dados Falsos! 🙏

| Nome | GitHub | Contribuição |
|------|--------|--------------|
| Roberto Godoy | [@godoyrw](https://github.com/godoyrw) | Criador |
| Você? | [@seu-usuario](https://github.com/seu-usuario) | Abra PR |

### Como Adicionar Seu Nome

Quando seu PR for aceito:

1. Adicione uma linha na tabela de contribuidores
2. Inclua seu nome, link do GitHub e tipo de contribuição
3. Exemplo: `| João Silva | [@joaosilva](https://github.com/joaosilva) | Feature: novo tag |`

## Dúvidas?

- Abra uma issue com a tag `question`
- Consulte a documentação em DEVELOPMENT.md
- Veja exemplos no README.md

Obrigado por contribuir! 🚀
