export type InferGenerateStaticParamsType<T extends () => Promise<unknown[]>> =
  Awaited<ReturnType<T>>[number];
