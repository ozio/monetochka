import { MCurrency, MOptions } from './index';
import { defaultLocales, locales, symbols } from './lib';

const parse = (string: string, currency: MCurrency): number => {
  const currencyLocale = defaultLocales[currency] ? defaultLocales[currency] : 'en';
  const formatRules = locales[currencyLocale].h
    ? locales[locales[currencyLocale].h]
    : locales[currencyLocale]
  ;

  let cleanedString = string;

  if (symbols[currency]) cleanedString = cleanedString.replace(symbols[currency], '');

  cleanedString = cleanedString.replace(currency, '');
  cleanedString = cleanedString.trim();
  cleanedString = cleanedString.split(formatRules.g).join('');
  cleanedString = cleanedString.replace(formatRules.d, '.');

  return parseFloat(cleanedString);
};

export default parse;
