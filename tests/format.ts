import format from '../src/format';

test('Incountable amount should throw error', () => {
  expect(() => format(NaN, 'USD', { throwOnError: true })).toThrow();
  expect(() => format(Infinity, 'RUB', { throwOnError: true })).toThrow();
  expect(() => format(-Infinity, 'BTC', { throwOnError: true })).toThrow();
});

test('Incountable amount should return string', () => {
  expect(format(NaN, 'USD', { throwOnError: false })).toEqual('—');
  expect(format(Infinity, 'RUB', { throwOnError: false })).toEqual('—');
  expect(format(-Infinity, 'BTC', { throwOnError: false })).toEqual('—');
});

test('Format simple string', () => {
  const hundredEuros = format(100, 'EUR', { maximumFractionDigits: 0 });
  const hundredDollas = format(100, 'USD');
  const tenBitcoins = format(10, 'BTC');
  const tenBitcoinsWithPrecision = format(10.6324752732931, 'BTC');

  expect(tenBitcoins).toEqual('10 BTC');
  expect(tenBitcoinsWithPrecision).toEqual('10.63247527 BTC');
  expect(hundredDollas).toEqual('$100.00');
  expect(hundredEuros).toEqual('€100');
});

test('Format string with several separators', () => {
  const thousandsOfRubles = format(52100.5014213, 'RUB');
  const thousandsOfRupies = format(5736832.5231635, 'INR');

  expect(thousandsOfRubles).toEqual('52,100.50 ₽');
  expect(thousandsOfRupies).toEqual('₹ 5,736,832.52');
});

test('Format with SI rounding', () => {
  const thousandsOfPounds = format(567382.63412, 'GBP', { siRounding: true, siPrecision: 0 });
  const millionsOfYen = format(80000000, 'JPY', { siRounding: true, siPrecision: 2 });

  expect(millionsOfYen).toEqual('¥80.00M');
  expect(thousandsOfPounds).toEqual('£567K');
});

test('Format with SI rounding and custom units', () => {
  const thousandsOfNorwegianKrones = format(499999.99, 'NOK', {
    siRounding: true,
    siPrecision: 0,
    siUnits: ['k'],
  });

  expect(thousandsOfNorwegianKrones).toEqual('kr 500k')
});

test('Format latin numbering system', () => {
  const egyptPoundsArabicLocale = format(500, 'EGP');

  expect(egyptPoundsArabicLocale).toEqual('£ 500.00');
});
