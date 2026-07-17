# Security Policy

## Política de Segurança

Obrigado por ajudar a manter o **Insomnia Plugin Dados Falsos** seguro.

Este projeto tem como objetivo auxiliar desenvolvedores na criação de dados fictícios para testes, desenvolvimento e homologação de APIs utilizando o Insomnia.

A segurança dos usuários, ambientes de desenvolvimento e dados manipulados durante o uso do plugin é uma prioridade.

---

# Escopo do Projeto

O plugin:

- Gera dados fictícios para testes;
- Não consulta bases externas;
- Não coleta informações pessoais dos usuários;
- Não envia dados para serviços de terceiros;
- Executa localmente dentro do ambiente do Insomnia.

Os dados gerados possuem finalidade exclusiva de desenvolvimento e testes.

---

# Dados Sensíveis

Este plugin **não deve ser utilizado para gerar, armazenar ou manipular dados reais de pessoas físicas ou jurídicas em ambientes produtivos**.

Recomenda-se utilizar os dados gerados apenas em:

- Desenvolvimento local;
- Ambientes de testes;
- Ambientes de homologação;
- Automação de testes.

---

# Versões Suportadas

As correções de segurança serão aplicadas preferencialmente na versão mais recente disponível.

| Versão | Status |
|--------|--------|
| Última versão publicada | ✅ Suportada |
| Versões antigas | ⚠️ Sem garantia de correção |

---

# Reportando uma Vulnerabilidade

Caso encontre uma vulnerabilidade de segurança, **não publique detalhes em uma Issue pública**.

O reporte deve ser enviado de forma privada para permitir análise e correção adequada.

Inclua, quando possível:

- Descrição da vulnerabilidade;
- Passos para reprodução;
- Versão do plugin afetada;
- Versão do Insomnia utilizada;
- Impacto identificado;
- Evidências técnicas.

---

# Exemplos de Vulnerabilidades Relevantes

São considerados relevantes:

- Execução inesperada de código;
- Acesso indevido a informações do ambiente;
- Vazamento de dados;
- Uso inseguro de dependências;
- Comportamentos que comprometam o ambiente do desenvolvedor.

---

# Processo de Tratamento

Após o recebimento de um reporte:

1. A vulnerabilidade será analisada;
2. O impacto será avaliado;
3. A correção será implementada quando aplicável;
4. Testes serão realizados;
5. Uma nova versão poderá ser publicada;
6. O histórico da correção será documentado.

---

# Práticas de Segurança Adotadas

O projeto busca seguir boas práticas de desenvolvimento seguro:

## Código

- Revisão de alterações;
- Código aberto para inspeção da comunidade;
- Dependências mantidas atualizadas;
- Evitar permissões desnecessárias.

## Privacidade

- Nenhuma coleta de dados do usuário;
- Nenhum armazenamento externo;
- Nenhum envio automático de informações.

## Dependências

São adotadas práticas como:

- Avaliação periódica de dependências;
- Redução de bibliotecas desnecessárias;
- Atualização de pacotes vulneráveis quando identificado risco.

---

# Divulgação Responsável

Solicitamos que pesquisadores:

- Não divulguem vulnerabilidades antes da correção;
- Não utilizem o plugin para acessar dados de terceiros;
- Não realizem testes contra ambientes ou sistemas sem autorização.

A divulgação coordenada ajuda a proteger todos os usuários.

---

# Reconhecimento

Agradecemos aos pesquisadores e colaboradores que contribuem para tornar este projeto mais seguro.

Toda contribuição responsável para melhoria da segurança é bem-vinda.