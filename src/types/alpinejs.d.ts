declare module "alpinejs" {
  interface Alpine {
    data(name: string, callback: () => Record<string, unknown>): void;
    start(): void;
    store(name: string, value?: unknown): unknown;
    plugin(plugin: (alpine: Alpine) => void): void;
  }

  const Alpine: Alpine;
  export default Alpine;
}
