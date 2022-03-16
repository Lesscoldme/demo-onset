export {};
declare module 'vue-router' {
  interface RouteMeta {
    text?: string | ((params: Record<string, string | string[]>) => string);
    hide?: boolean | undefined;
  }
}
