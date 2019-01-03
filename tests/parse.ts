import format from '../src/format';
import parse from '../src/parse';

test('Parse simple string', () => {
  const parsedHundredDollars = parse('$100', 'USD');

  expect(parsedHundredDollars).toEqual(100);
});

test('Format and parse', () => {
  const thousandsOfEuros = format(52100.5014213, 'EUR');
  const parsedEuros = parse(thousandsOfEuros, 'EUR');

  expect(parsedEuros).toEqual(52100.50);
});
