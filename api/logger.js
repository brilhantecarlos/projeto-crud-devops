// Logger simples usando console, pode ser substituído por winston ou pino para produção
export const logger = {
  info: (msg) => console.log(`INFO: ${msg}`),
  warn: (msg) => console.warn(`WARN: ${msg}`),
  error: (msg) => console.error(`ERROR: ${msg}`)
};
