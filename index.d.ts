export interface IMonetochkaFormat {
  value: number;
  currency: string;
  precision?: number;
  si?: number;
  locale?: string;
  errorValue?: string;
  noSymbol?: boolean;
}

export interface IMonetochkaGlobalConfig {
  throwOnError: boolean;
  errorValue: string;
  defaultLocale?: string;
  noSymbol?: boolean;
}

export interface IMonetochkaProxyConfig {
  h: string;
}

export interface IMonetochkaConfig {
  g: string; // thousands separator
  d: string; // float separator
  p: number; // precision
  t: string; // template
}
