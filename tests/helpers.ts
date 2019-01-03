import { MSIUnits } from '../src';
import siRound from '../src/helpers/siRound';

const units: MSIUnits = ['K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];

test('SI rounding', () => {
  expect(siRound(5, { siUnits: units, siRounding: true })).toMatchObject([5, '']);
  expect(siRound(1000, { siUnits: units, siRounding: true })).toMatchObject([1, 'K']);
  expect(siRound(5000, { siUnits: units, siRounding: true })).toMatchObject([5, 'K']);
  expect(siRound(241321084, { siUnits: units, siRounding: true })).toMatchObject([241.321084, 'M']);
  expect(siRound(241321084, { siUnits: units, siRounding: false })).toMatchObject([241321084, '']);
});
