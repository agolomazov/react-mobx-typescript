import { makeAutoObservable } from 'mobx';

/**
 * Класс для работы с таймерами
 */
export class Timer {
  secondPassed = 0;

  /**
   * Конструктор
   */
  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Метод увеличения счетчика
   *
   * @returns {void}
   */
  incrementTimer(): void {
    this.secondPassed += 1;
  }
}
