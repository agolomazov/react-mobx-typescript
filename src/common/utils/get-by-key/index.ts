import { pathOr } from 'ramda';

/**
 * ### Метод генерирует функцию, которая возвращает значение по ключу в объекте
 *
 * @param {Object} hash - Объект ключ-значение
 * @param {any} defaultValue - значение по умолчанию
 *
 * @returns {Function} Функция которая возвращает значение по ключу в объекте
 */
export function getByKey<T, K extends keyof T>(hash: T, defaultValue: T[K]) {
  return (key: Extract<K, string | number>): T[K] =>
    pathOr(defaultValue, [key], hash);
}
