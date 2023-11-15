declare module "*.jpg" {
  type ImageToolsOutput = {
    img: { src: string; w: number; h: number };
    sources: Record<string, string>;
  };

  /**
   * actual types
   * - code https://github.com/JonasKruckenberg/imagetools/blob/main/packages/core/src/output-formats.ts
   * - docs https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md#metadata
   */
  const out: ImageToolsOutput;
  export default out;
}
