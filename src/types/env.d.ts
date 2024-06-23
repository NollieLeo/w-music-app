/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

// 声明 vite 环境变量
declare interface ImportMetaEnv {
  readonly VITE_HTTP: string
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}
