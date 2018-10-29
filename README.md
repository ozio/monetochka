# Monetochka

Simple, fast and zero-dependency currency formatting library.

## Usage

```bash
npm install monetochka --save
```

```javascript
import monetochka from 'monetochka';

monetochka.format({ value: 10, currency: 'USD' }); // $10.00
monetochka.format({ value: 10, currency: 'USD', locale: 'sv' }); // 10,00 $
monetochka.format({ value: 20000, currency: 'RUB' }); // 20 000,00 ₽
monetochka.format({ value: 350590, currency: 'EUR', si: 1 }); // 350,6K € 
monetochka.format({ value: 18.729361, currency: 'GBP', precision: 0 }); // £19

// Simple format
monetochka.f(15.241, 'SEK'); //
```

#### Parameters:

| Property    | Type   | Required | Description |
| ----------- | ------ | :------: | ----------- |
| `value`     | number | yes      |
| `currency`  | string | yes      |
| `precision` | number | no       | Digits after integer part.
| `locale`    | string | no       | Locale currency format.
| `si`        | number | no       | Enables SI-format thousands rounding (e.g. 10000 -> 10K) and define digits after integer part.

### Global Configure

```javascript
monetochka.globalConfig.throwOnError = true;
```

| Property      | Type    | Default value |
| ------------- | ------- | ------------- |
| throwOnError  | boolean | false         |
| errorValue    | string  | "—"           |
| defaultLocale | string  | null          |

## Next steps

- [ ] Parameter for simple/extended currency symbols (e.g. `$` or `US$`), because a lot of currencies have several symbols;
- [ ] Parameter for strict and loose precision (strict precision 2 should always returns `0.00` and not strict should be rounded to `0`). The same for si rounding;
- [ ] Parameter for output only currency codes (e.g. `f(2000, 'RUB') -> 2 000 RUB`);
- [ ] Method to add new currencies;
- [ ] Method to manipulate si rounding chars (e.g. for i18n or `K` -> `k`);
- [ ] Prepare code to be readed by a NORMAL programmers (refactoring, I mean);
- [ ] Stop trying to make my own test framework, hehe.

## License

MIT
