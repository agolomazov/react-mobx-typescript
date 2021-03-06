/**
 * Метод возвращает основные настройки приложения
 * @returns {object} конфигурация приложения
 */
const createConfig = () => ({
  maxFileSize: 11000,
  modules: {
    errors: 'errors' as const,
    loading: 'loading' as const,
    notices: 'notices' as const,
    router: 'router' as const,
  },
  environment: process.env.NODE_ENV,
  defaultDelay: 2000,
});

/**
 * Конфигурация приложения
 */
export const config: Readonly<ReturnType<typeof createConfig>> = createConfig();
