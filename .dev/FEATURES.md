# Novas Tags/Domínios Sugeridos — insomnia-plugin-dados-falsos

Guia de implementação para expansão do catálogo de template tags.

---

## 1. Cartão de Crédito - v3.0.1

**Tags**: `numeroCartao`, `bandeiraCartao`, `cvv`, `validadeCartao`, `cartaoCompleto`

**Por quê**: é provavelmente a lacuna mais óbvia para um plugin de API testing — qualquer fluxo de checkout/pagamento precisa disso. Tecnicamente é quase reaproveitamento direto: o algoritmo de Luhn é o mesmo tipo de "dígito verificador com módulo" que já existe implementado para CPF/CNPJ, então a curva de aprendizado interna é baixa.

---

## 2. Bancário Expandido

**Tags**: `codigoBanco` (tabela FEBRABAN: 001-Banco do Brasil, 341-Itaú, 237-Bradesco, etc.), `tipoConta` (corrente/poupança/pagamento), `chavePixCpf`, `chavePixEmail`, `chavePixTelefone`

**Por quê**: já existem `agencia`, `conta` e `pixAleatoria` — isso completa o domínio bancário que já existe, sem criar categoria nova. Chave Pix por CPF/email/telefone é reaproveitamento direto dos geradores que já existem (`genCpf`, `genEmail`, `genCellphone`), só empacotando no formato de chave.

---

## 3. Boleto Bancário

**Tags**: `linhaDigitavel`, `codigoBarrasBoleto`

**Por quê**: mesma família de "dígito verificador módulo 10/11" que CPF/CNPJ/cartão já usam — reaproveita a mesma família de algoritmos. Alto valor para quem testa APIs de cobrança (contexto fintech/bancário).

---

## 4. Utilitários HTTP/API

**Tags**: `statusHttp` (200, 404, 500...), `metodoHttp` (GET/POST/PUT/DELETE), `userAgent`, `headerComum` (Content-Type, Authorization Bearer fake, etc.)

**Por quê**: é a única categoria pensada especificamente para o contexto do Insomnia (diferencial que nenhum outro faker genérico tem, porque eles não sabem que rodam dentro de um cliente de API). Esforço mínimo — são só listas estáticas, sem validação de dígito.

---

## 5. Idade

**Tags**: `idade` (calculada a partir de `genBirthdate`)

**Por quê**: reaproveita 100% o gerador de nascimento que já existe, só formata a diferença de anos. Praticamente gratuito de implementar.

---

## 6. RH / Trabalho

**Tags**: `salario`, `cargaHoraria`, `tipoContrato` (CLT/PJ/Estágio), `matriculaFuncional`, `dataAdmissao`

**Por quê**: complementa `cargo` e `departamento`, que já existem em "Empresa e Trabalho" — fecha o domínio de RH que hoje está pela metade.

---

## 7. Processo Judicial (CNJ)

**Tags**: `numeroProcesso` (formato NNNNNNN-DD.AAAA.J.TR.OOOO com dígito verificador módulo 97)

**Por quê**: maior complexidade de implementação (módulo 97 é mais custoso que módulo 11), então fica mais pra frente na fila apesar de ser um dado relevante pra quem testa sistemas jurídicos/bancários que integram com tribunais.

---

## 8. Documentos Adicionais

**Tags**: `passaporte`, `ctps` (Carteira de Trabalho), `tituloPropriedade`

**Por quê**: menor prioridade — são documentos menos usados em testes de API do dia a dia comparado a CPF/CNPJ/cartão.

---

## 9. Consentimento LGPD (diferencial)

**Tags**: `consentimentoLgpd` → retorna objeto JSON simulado (`{ aceito: true, dataConsentimento, versaoPolitica, finalidade }`)

**Por quê**: diferencial competitivo real. Posiciona o plugin como "faker para compliance", não só para dados aleatórios — nenhum faker genérico do mercado (nem os em inglês) pensa nisso. Baixo esforço técnico, alto valor de posicionamento.

---

## Ordem de Implementação Sugerida

| # | Feature | Esforço | Razão da ordem |
|---|---|---|---|
| 1 | **Utilitários HTTP/API** | Muito baixo | Sem validação, só listas estáticas — ganho rápido, e é o diferencial mais alinhado ao produto (Insomnia) |
| 2 | **Idade** | Trivial | Reaproveita gerador existente, zero risco |
| 3 | **Bancário Expandido** (banco, tipo conta, Pix por tipo) | Baixo | Reaproveita geradores existentes (CPF/email/celular), completa categoria já existente |
| 4 | **Cartão de Crédito** | Médio | Reaproveita algoritmo de Luhn (família dos validadores de CPF/CNPJ), alta demanda de mercado |
| 5 | **Boleto Bancário** | Médio | Mesma família de validação (mod10/mod11), mas string mais longa e regras mais específicas |
| 6 | **Consentimento LGPD** | Baixo-médio | Não depende de nada acima, pode entrar em paralelo com qualquer item — prioridade por posicionamento estratégico, não por dependência técnica |
| 7 | **RH/Trabalho** | Médio | Novo domínio, mas sem validação complexa |
| 8 | **Processo Judicial (CNJ)** | Alto | Módulo 97 é mais complexo de implementar e testar corretamente |
| 9 | **Documentos adicionais** | Baixo | Simples, mas menor prioridade de uso real |

**Lógica geral da ordem**: primeiro o que reaproveita infraestrutura já validada (Luhn, mod11, geradores existentes) e tem baixo risco de introduzir bug em algoritmo novo; a peça de maior complexidade matemática (CNJ, módulo 97) fica por último, quando o padrão de "gerador + validador + teste" já estiver bem rodado nas features mais simples.