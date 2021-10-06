/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';

    readonly PORT: string;

    readonly JWKS_URI: string;
    readonly AUDIENCE: string;
    readonly ISSUER: string;

    readonly SERVICE_URL_MAIN: string;
  }
}
