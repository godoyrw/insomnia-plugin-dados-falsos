/**
 * Gerador de CNS (Cartão Nacional de Saúde)
 * ========================================
 * Responsável por gerar números de CNS válidos com dígitos verificadores.
 * Utiliza o algoritmo de validação baseado em módulo 11.
 *
 * @module generators/cns
 */

/**
 * Valida CNS (Cartão Nacional de Saúde) - algoritmo basado em módulo 11
 * @param {string} cns - Número do CNS a ser validado
 * @returns {boolean} True se válido
 */
function validarCNS(cns: string): boolean {
  if (!/^\d{15}$/.test(cns)) return false;

  // Primeiro dígito verificador (posições 1-13)
  const primeiros13 = cns.slice(0, 13);
  const pesos = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  let soma = 0;
  for (let i = 0; i < 13; i++) {
    soma += parseInt(primeiros13[i]) * pesos[i];
  }
  const resto1 = soma % 11;
  const digito1 = resto1 < 2 ? 0 : 11 - resto1;

  // Segundo dígito verificador (posições 1-14, incluindo primeiro dígito verificador)
  const primeiros14 = cns.slice(0, 14);
  soma = 0;
  for (let i = 0; i < 14; i++) {
    soma += parseInt(primeiros14[i]) * pesos[i];
  }
  const resto2 = soma % 11;
  const digito2 = resto2 < 2 ? 0 : 11 - resto2;

  return parseInt(cns[13]) === digito1 && parseInt(cns[14]) === digito2;
}

/**
 * Gera um número de CNS (Cartão Nacional de Saúde) válido
 * @returns {string} CNS com 15 dígitos (13 de base + 2 de verificação)
 * @example
 *   genCNS() // "123456789012345"
 */
export function genCNS(): string {
  let cns;
  do {
    // Gera 13 dígitos aleatórios + calcula os 2 dígitos verificadores
    const base = Array.from({ length: 13 }, () => Math.floor(Math.random() * 10)).join('');

    // Calcula primeiro dígito verificador
    const pesos = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    let soma = 0;
    for (let i = 0; i < 13; i++) {
      soma += parseInt(base[i]) * pesos[i];
    }
    const resto1 = soma % 11;
    const digito1 = resto1 < 2 ? 0 : 11 - resto1;

    // Calcula segundo dígito verificador
    const baseComDigito1 = base + digito1;
    soma = 0;
    for (let i = 0; i < 14; i++) {
      soma += parseInt(baseComDigito1[i]) * pesos[i];
    }
    const resto2 = soma % 11;
    const digito2 = resto2 < 2 ? 0 : 11 - resto2;

    cns = base + digito1 + digito2;
  } while (!validarCNS(cns)); // Garantir que seja válido (embora o cálculo já deva garantir)

  return cns;
}