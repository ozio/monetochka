import { MLocaleSettings, MOptions } from '../index';

const numberFormat = (
  siAmount: [number, string],
  options: MOptions,
  localeSettings: MLocaleSettings,
): string => {
  let minimumFractionDigits = typeof localeSettings.f !== 'undefined'
    ? localeSettings.f
    : 0
  ;

  if (typeof options.fractionDigits !== 'undefined' || typeof options.maximumFractionDigits !== 'undefined') {
    minimumFractionDigits = typeof options.fractionDigits === 'undefined'
      ? options.maximumFractionDigits
      : options.fractionDigits
    ;
  }

  let maximumFractionDigits = typeof localeSettings.fMax !== 'undefined'
    ? localeSettings.fMax
    : typeof localeSettings.f !== 'undefined'
      ? localeSettings.f
      : options.fractionDigits
  ;

  if (options.siRounding) {
    minimumFractionDigits = options.siPrecision;
    maximumFractionDigits = options.siPrecision;
  }

  const localeString = siAmount[0].toLocaleString(options.locale, {
    minimumFractionDigits,
    maximumFractionDigits,
  });

  return `${localeString}${siAmount[1]}`;
};

export default numberFormat;
