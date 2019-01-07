import { defaultLocales, locales, symbols } from './lib';
import { MCurrency, MOptions, MSIUnits } from './index';
import siRound from './helpers/siRound';
import numberFormat from './helpers/numberFormat';

const defaultSiUnits: MSIUnits = ['K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];

const defaultOptions: MOptions = {
  isCrypto: false,
  siPrecision: 0,
  siRounding: false,
  siUnits: defaultSiUnits,
  throwOnError: false,
  errorValue: '—',
};

const throwErr = (message: string, options: MOptions, e?: Error) => {
  if (options.throwOnError) {
    throw (e || new Error(message));
  }

  return options.errorValue;
};

const format = (
  amount: number,
  currency: MCurrency,
  options: MOptions = {},
): string => {
  const mergedOptions: MOptions = { ...defaultOptions, ...options };

  if (Number.isNaN(amount) || !Number.isFinite(amount)) {
    return throwErr('The amount is not countable (NaN or Infinity)', mergedOptions);
  }

  if (typeof amount !== 'number') {
    return throwErr(`Wrong amount type (${typeof amount})`, mergedOptions);
  }

  if (typeof currency !== 'string') {
    return throwErr(`Wrong currency type (${typeof amount})`, mergedOptions);
  }

  const currencyLocale = defaultLocales[currency] ? defaultLocales[currency] : 'en';

  if (!mergedOptions.locale) mergedOptions.locale = currencyLocale;

  const currencySymbol = symbols[currency] && currencyLocale !== 'crypto' ? symbols[currency] : currency;
  const formatRules = locales[currencyLocale].h
    ? locales[locales[currencyLocale].h]
    : locales[currencyLocale]
  ;

  let amountWithSI;
  let formattedAmount;

  try {
    amountWithSI = siRound(amount, mergedOptions);
    formattedAmount = numberFormat(amountWithSI, mergedOptions, formatRules);
  } catch (e) {
    return throwErr(`Can't parse a value`, mergedOptions, e);
  }
  return formatRules.t
    .replace('!', currencySymbol)
    .replace('@', formattedAmount)
  ;
};

export default format;
