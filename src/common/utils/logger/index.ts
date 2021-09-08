/**
 * Логирование данных в консоль
 * @param {unknown[]} data - Какие-то данные для логирования
 * @returns {void}
 */
export function logger(...data: unknown[]): void {
  console.info(...data);
}
