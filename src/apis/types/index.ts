export type HttpResponseData<T extends Record<string, unknown> = Record<string, unknown>> = {
  code: number
} & T
