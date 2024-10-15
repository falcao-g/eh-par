/**
 * @module
 *
 * Esse módulo contém a função ehPar
 *
 * @example
 * ```ts
 * import { ehPar } from "@falcao/eh-par";
 * const n = 47
 * console.log(ehPar(n))
 * ```
 */

/**
 * Verifica se um número é par
 * @param n - número a ser verificado
 * @returns - true se o número for par, false caso contrário
 */
export function ehPar(n: number): boolean {
  return (n & 1) == 0;
}