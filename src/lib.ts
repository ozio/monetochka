/**
 * Original data source:
 * https://github.com/osrec/currencyFormatter.js
 *
 * Symbols:
 * - https://www.xe.com/symbols.php
 * - http://www.fileformat.info/info/unicode/block/currency_symbols/list.htm
 **/
import { MLocaleSettings } from '.';

const symbols: Record<string, string> = {
  BTC: '₿', // Bitcoin
  LTC: null, // Litecoin
  ETH: null, // Ethereum
  USDT: 'USD₮', // Tether
  JPYT: 'JPY₮', // Tether
  EURT: 'EUR₮', // Tether
  BCH: null, // Bitcoin Cash
  DASH: 'Dash', // Dash
  AED: 'د.إ.‏', // United Arab Emirates Dirham
  ARS: '$', // Argentine Peso
  AUD: 'A$', // Australian Dollar
  BRL: 'R$', // Brazilian Real
  CAD: 'CA$', // Canadian Dollar
  CHF: 'CHF', // Swiss Franc
  CLP: '$', // Chilean Peso
  CNY: '¥', // Chinese Yuan
  COP: '$', // Colombian Peso
  CZK: 'Kč', // Czech Republic Koruna
  DKK: 'kr', // Danish Krone
  DOP: 'RD$', // Dominican Peso
  EGP: '£', // Egyptian Pound
  EUR: '€', // Euro
  GBP: '£', // British Pound Sterling
  HKD: 'HK$', // Hong Kong Dollar
  HRK: 'kn', // Croatian Kuna
  HUF: 'Ft', // Hungarian Forint
  IDR: 'Rp', // Indonesian Rupiah
  INR: '₹', // Indian Rupee
  IRR: '﷼', // Iranian Rial
  JPY: '¥', // Japanese Yen
  KES: 'KSh', // Kenyan Shilling
  KRW: '₩', // South Korean Won
  KZT: '₸', // Kazakhstani Tenge
  MAD: '.د.م', // Moroccan Dirham
  MXN: 'MX$', // Mexican Peso
  MYR: 'RM', // Malaysian Ringgit
  NGN: '₦', // Nigerian Naira
  NOK: 'kr', // Norwegian Krone
  NZD: 'NZ$', // New Zealand Dollar
  PEN: 'S/.', // Peruvian Nuevo Sol
  PHP: '₱', // Philippine Peso
  PKR: '₨', // Pakistani Rupee
  PLN: 'zł', // Polish Zloty
  RON: 'lei', // Romanian Leu
  RUB: '₽', // Russian Ruble
  SAR: '.ر.س', // Saudi Riyal
  SEK: 'kr', // Swedish Krona
  SGD: 'S$', // Singapore Dollar
  THB: '฿', // Thai Baht
  TRY: '₺', // Turkish Lira
  TZS: 'TSh', // Tanzanian Shilling
  UAH: '₴', // Ukrainian Hryvnia
  USD: '$', // United States Dollar
  VEF: 'Bs', // Venezuelan Bolívar Fuerte
  VND: '₫', // Vietnamese Dong
  ZAR: 'R', // South African Rand
};

const defaultLocales: Record<string, string> = {
  BTC: 'crypto',
  LTC: 'crypto',
  ETH: 'crypto',
  USDT: 'crypto',
  JPYT: 'crypto',
  EURT: 'crypto',
  BCH: 'crypto',
  DASH: 'crypto',
  AED: 'ar-AE',
  ARS: 'es-AR',
  AUD: 'en',
  BRL: 'pt-BR',
  CAD: 'en-CA',
  CHF: 'de-CH',
  CLP: 'es-CL',
  CNY: 'zh-Hans-CN',
  COP: 'es-CO',
  CZK: 'cs',
  DKK: 'da-DK',
  DOP: 'es-DO',
  EGP: 'ar-EG',
  EUR: 'en',
  GBP: 'en',
  HKD: 'zh-Hans-HK',
  HRK: 'hr-HR',
  HUF: 'hu-HU',
  IDR: 'id',
  INR: 'en-IN',
  IRR: 'fa-IR',
  JPY: 'ja',
  KES: 'en-KE',
  KRW: 'ko-KR',
  KZT: 'kk',
  MAD: 'ar',
  MXN: 'es-MX',
  MYR: 'ms-MY',
  NGN: 'en-NG',
  NOK: 'nb-NO',
  NZD: 'en-NZ',
  PEN: 'es-PE',
  PHP: 'fil',
  PKR: 'ur-PK',
  PLN: 'pl',
  RON: 'ro',
  RUB: 'ru',
  SAR: 'ar-SA',
  SEK: 'sv-SE',
  SGD: 'en-SG',
  THB: 'th',
  TRY: 'tr-TR',
  TZS: 'sw-TZ',
  UAH: 'uk',
  USD: 'en-US',
  VEF: 'es-VE',
  VND: 'vi',
  ZAR: 'zu',
};

const locales: Record<string, MLocaleSettings> = {
  'crypto': { g: ',', d: '.', fMax: 8, t: '@ !' },
  'ar': { g: ',', d: '.', f: 2, t: '! @' },
  'ar-AE': { h: 'ar' },
  'ar-EG': { h: 'ar' },
  'ar-SA': { h: 'ar' },
  'cs': { g: ' ', d: ',', f: 2, t: '@ !' },
  'da': { g: '.', d: ',', f: 2, t: '@ !' },
  'da-DK': { h: 'da' },
  'de-CH': { g: '’', d: '.', f: 2, t: '! @' },
  'en': { g: ',', d: '.', f: 2, t: '!@' },
  'en-CA': { h: 'en' },
  'en-IN': { g: ',', d: '.', f: 2, t: '! @' },
  'en-KE': { h: 'en' },
  'en-NG': { h: 'en' },
  'en-NZ': { h: 'en' },
  'en-SG': { h: 'en' },
  'en-US': { h: 'en' },
  'es-AR': { g: '.', d: ',', f: 2, t: '! @' },
  'es-CL': { g: '.', d: ',', f: 0, t: '!@' },
  'es-CO': { g: '.', d: ',', f: 2, t: '! @' },
  'es-DO': { h: 'es' },
  'es-MX': { h: 'es' },
  'es-PE': { h: 'es' },
  'es-VE': { g: '.', d: ',', f: 2, t: '!@' },
  'fa': { g: ',', d: '.', f: 2, t: '!@' },
  'fa-IR': { h: 'fa' },
  'fil': { g: ',', d: '.', f: 2, t: '!@' },
  'hr': { g: '.', d: ',', f: 2, t: '@ !' },
  'hr-HR': { h: 'hr' },
  'hu': { g: ' ', d: ',', f: 2, t: '@ !' },
  'hu-HU': { h: 'hu' },
  'id': { g: '.', d: ',', f: 2, t: '!@' },
  'ja': { g: ',', d: '.', f: 0, t: '!@' },
  'kk': { g: ' ', d: ',', f: 2, t: '@ !' },
  'ko': { g: ',', d: '.', f: 0, t: '!@' },
  'ko-KR': { h: 'ko' },
  'ms': { g: ',', d: '.', f: 2, t: '!@' },
  'ms-MY': { h: 'ms' },
  'nb': { g: ' ', d: ',', f: 2, t: '! @' },
  'nb-NO': { h: 'nb' },
  'pl': { g: ' ', d: ',', f: 2, t: '@ !' },
  'pt': { g: '.', d: ',', f: 2, t: '!@' },
  'pt-BR': { h: 'pt' },
  'ro': { g: '.', d: ',', f: 2, t: '@ !' },
  'ru': { g: ' ', d: ',', f: 2, t: '@ !' },
  'sv': { g: ' ', d: ',', f: 2, t: '@ !' },
  'sv-SE': { h: 'sv' },
  'sw': { g: ',', d: '.', f: 2, t: '!@' },
  'sw-TZ': { h: 'sw' },
  'th': { g: ',', d: '.', f: 2, t: '!@' },
  'tr': { g: '.', d: ',', f: 2, t: '@ !' },
  'tr-TR': { h: 'tr' },
  'uk': { g: ' ', d: ',', f: 2, t: '@ !' },
  'ur': { g: ',', d: '.', f: 2, t: '! @' },
  'ur-PK': { h: 'ur' },
  'vi': { g: '.', d: ',', f: 0, t: '@ !' },
  'zh': { g: ',', d: '.', f: 2, t: '!@' },
  'zh-Hans-CN': { h: 'zh' },
  'zh-Hans-HK': { h: 'zh' },
  'zu': { g: ',', d: '.', f: 2, t: '!@' },
};

export { symbols, defaultLocales, locales };
