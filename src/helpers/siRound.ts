import { MOptions } from '../index';

const siRound = (value: number, options: MOptions): [number, string] => {
  if (value < 1000 || !options.siRounding) return [value, ''];

  const units = options.siUnits;

  let decimal;

  for (let i = units.length - 1; i >= 0; i--) {
    decimal = Math.pow(1000, i + 1);

    if (value <= -decimal || value >= decimal) {
      return [value / decimal, units[i]];
    }
  }
};

export default siRound;
