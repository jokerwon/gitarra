export const warn = (module: string, ...args: any[]) => {
  console.warn(`[Gitarra.${module}]:`, ...args);
};
