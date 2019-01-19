import { MLocaleSettings, MOptions } from '../index';

const numberFormat = (
  siAmount: [number, string],
  options: MOptions,
  localeSettings: MLocaleSettings,
): string => {
  const [amount, siPostfix] = siAmount;

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

  if (options.siRounding && amount < 1000) {
    minimumFractionDigits = options.siPrecision;
    maximumFractionDigits = options.siPrecision;
  }

  const localeString = amount.toLocaleString(`${options.locale}-u-nu-latn`, {
    minimumFractionDigits,
    maximumFractionDigits,
  });

  return `${localeString}${siPostfix}`;
};

export default numberFormat;
