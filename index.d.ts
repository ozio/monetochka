export interface IMonetochkaFormat {
  value: number;
  currency: string;
  precision?: number;
  si?: number;
  locale?: string;
  errorValue?: string;
}

export interface IMonetochkaGlobalConfig {
  throwOnError: boolean;
  errorValue: string;
  defaultLocale?: string;
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
