/**
 * Stress Test Runner
 * ==================
 *
 * Executa repetidamente toda a suíte de testes do projeto para identificar
 * problemas intermitentes (flaky tests), condições de corrida e falhas não
 * determinísticas.
 *
 * O número de execuções pode ser informado como parâmetro de linha de comando.
 *
 * Exemplos:
 *
 *   npm run test:stress
 *   npm run test:stress -- 100
 *   npm run test:stress -- 1000
 *   npm run test:stress -- 10000
 *
 * Saída:
 * - Progresso da execução
 * - Percentual concluído
 * - ETA (tempo restante estimado)
 * - Tempo total
 * - Tempo médio por execução
 * - Quantidade de sucessos/falhas
 * - Score final
 *
 * Exit Code:
 * - 0 → Todas as execuções passaram
 * - 1 → Pelo menos uma execução falhou
 *
 * @author Roberto Godoy
 * @license MIT
 */

import { execSync } from 'node:child_process';

/**
 * Número padrão de execuções quando nenhum parâmetro é informado.
 */
const DEFAULT_ITERATIONS = 100;

/**
 * Quantidade de execuções solicitadas pelo usuário.
 *
 * Exemplo:
 *   npm run test:stress -- 500
 */
const max = Number(process.argv[2] ?? DEFAULT_ITERATIONS);

/**
 * Valida o parâmetro informado.
 */
if (!Number.isInteger(max) || max <= 0) {
    console.error('❌ O número de execuções deve ser um inteiro positivo.');
    process.exit(1);
}

/**
 * Comando responsável por compilar e executar a suíte de testes.
 *
 * Observação:
 * Atualmente o TypeScript é recompilado a cada execução.
 * Caso a performance seja um problema, recomenda-se compilar apenas uma vez
 * antes do loop e executar somente o JavaScript gerado.
 */
const TEST_COMMAND =
    'tsc test/generators.test.ts --outDir dist/insomnia-plugin-dados-falsos && node dist/insomnia-plugin-dados-falsos/test/generators.test.js';

/**
 * Quantidade de execuções concluídas com sucesso.
 */
let success = 0;

/**
 * Quantidade de execuções que falharam.
 */
let fail = 0;

/**
 * Momento inicial da execução do stress test.
 */
const start = performance.now();

console.log(`🚀 Executando ${max} iterações...\n`);

/**
 * Executa a suíte de testes repetidamente.
 *
 * A cada iteração são calculados:
 * - percentual concluído
 * - tempo médio por execução
 * - ETA (Estimated Time Remaining)
 */
for (let i = 1; i <= max; i++) {
    const elapsed = performance.now() - start;
    const average = elapsed / i;
    const remaining = ((average * (max - i)) / 1000).toFixed(1);
    const percent = ((i / max) * 100).toFixed(0);

    process.stdout.write(
        `\r🧪 ${i}/${max} (${percent}%) | ETA ${remaining}s`
    );

    try {
        execSync(TEST_COMMAND, {
            stdio: 'ignore'
        });

        success++;
    } catch (error) {
        fail++;

        process.stdout.write('\n');

        console.error(`❌ Falha na execução ${i}`);

        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

/**
 * Tempo total de execução em segundos.
 */
const totalTime = ((performance.now() - start) / 1000).toFixed(2);

/**
 * Tempo médio gasto por execução.
 */
const avgTime = (((performance.now() - start) / max) / 1000).toFixed(3);

/**
 * Percentual de sucesso da execução.
 */
const score = ((success / max) * 100).toFixed(2);


/**
 * Exibe um resumo final da execução.
 */
console.log('\n');
console.log('──────────────────────────────────────────────');
console.log('              Stress Test');
console.log('──────────────────────────────────────────────');
console.log(`Execuções.....: ${max}`);
console.log(`Sucessos......: ${success}`);
console.log(`Falhas........: ${fail}`);
console.log(`Score.........: ${score}%`);
console.log(`Tempo Total...: ${totalTime}s`);
console.log(`Tempo Médio...: ${avgTime}s`);
console.log('──────────────────────────────────────────────');

/**
 * Finaliza o processo.
 *
 * Exit Code:
 * - 0 → Todas as execuções passaram.
 * - 1 → Pelo menos uma execução falhou.
 */
process.exit(fail === 0 ? 0 : 1);