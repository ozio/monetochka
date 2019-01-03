export interface MLocaleSettings {
  g?: string; // thousands separator
  d?: string; // float separator
  t?: string; // template
  h?: string; // proxy
  f?: number; // fraction digits
  fMax?: number; // maximum fraction digits
}

export type MFiat =
  'AED' | 'ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CZK' | 'DKK' | 'DOP' | 'EGP' | 'EUR' |
  'GBP' | 'HKD' | 'HRK' | 'HUF' | 'IDR' | 'INR' | 'IRR' | 'JPY' | 'KES' | 'KRW' | 'KZT' | 'MAD' | 'MXN' | 'MYR' |
  'NGN' | 'NOK' | 'NZD' | 'PEN' | 'PHP' | 'PKR' | 'PLN' | 'RON' | 'RUB' | 'SAR' | 'SEK' | 'SGD' | 'THB' | 'TRY' |
  'TZS' | 'UAH' | 'USD' | 'VEF' | 'VND' | 'ZAR'
;

export type MCrypto = 'BTC' | 'LTC' | 'ETH' | 'BCH' | 'DASH' | 'USDT';

export type MCurrency = MFiat | MCrypto | string;

export interface MOptions {
  locale?: string,
  isCrypto?: boolean;
  siRounding?: boolean;
  siUnits?: MSIUnits;
  siPrecision?: number;
  throwOnError?: boolean;
  errorValue?: string;
  fractionDigits?: number;
  maximumFractionDigits?: number;
}

export type MSIUnits = [string, string?, string?, string?, string?, string?, string?, string?]

import format from './format';
import parse from './parse';

export default { format, parse };
