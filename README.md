# Monetochka

Simple, fast and zero-dependency currency formatter.

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
```

| Property  | Type   | Required | Description |
| --------- | ------ | :------: | ----------- |
| value     | number | yes      |
| currency  | string | yes      |
| precision | number | no       | Digits after integer part
| locale    | string | no       | Locale currency format
| si        | number | no       | Enables SI-format thousands rounding (e.g. 10000 -> 10K) and define digits after integer part

### Global Configure

```javascript
monetochka.globalConfig.throwOnError = true;
```
| Property      | Type    | Default value |
| ------------- | ------- | ------------- |
| throwOnError  | boolean | false         |
| errorValue    | string  | "—"           |
| defaultLocale | string  | null          |

## License

MIT
