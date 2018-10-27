export interface IMonetochkaFormat {
  value: number;
  currency: string;
  precision?: number;
  k?: number;
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
