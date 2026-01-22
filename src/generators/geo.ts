/**
 * Geradores de Geolocalização e Rede
 * ====================================
 * Módulo responsável por gerar dados de localização e rede:
 * - Latitude e longitude
 * - Endereço IPv4
 * - Endereço IPv6
 *
 * Todos os geradores usam faixas reservadas para documentação (RFC 5737 e RFC 3849)
 * para evitar conflitos com IPs reais. Útil para testes de APIs de geolocalização
 * e roteamento de rede.
 *
 * @module generators/geo
 */

import { randInt } from '../utils';

/**
 * Gera latitude aleatória
 * Intervalo: -90 a 90 (cobertura global)
 * Precisão: 4 casas decimais (~11 metros)
 *
 * @returns {string} Latitude com 4 casas decimais
 * @example
 * genLatitude() // "-23.5617"
 */
export function genLatitude(): string {
  return (Math.random() * 180 - 90).toFixed(4);
}

/**
 * Gera longitude aleatória
 * Intervalo: -180 a 180 (cobertura global)
 * Precisão: 4 casas decimais (~11 metros)
 *
 * @returns {string} Longitude com 4 casas decimais
 * @example
 * genLongitude() // "-46.6559"
 */
export function genLongitude(): string {
  return (Math.random() * 360 - 180).toFixed(4);
}

/**
 * Gera endereço IPv4
 * Usa faixa reservada para documentação: 203.0.113.0/24 (RFC 5737)
 * Seguro para usar em testes sem conflitar com IPs reais
 *
 * @returns {string} Endereço IPv4 no formato XXX.XXX.XXX.XXX
 * @example
 * genIpv4() // "203.0.113.42"
 */
export function genIpv4(): string {
  return `203.0.113.${randInt(1, 254)}`;
}

/**
 * Gera endereço IPv6
 * Usa faixa reservada para documentação: 2001:db8::/32 (RFC 3849)
 * Seguro para usar em testes sem conflitar com IPs reais
 *
 * @returns {string} Endereço IPv6 no formato 2001:db8::XXXX
 * @example
 * genIpv6() // "2001:db8::a1b2"
 */
export function genIpv6(): string {
  return `2001:db8::${randInt(1, 65535).toString(16)}`;
}
