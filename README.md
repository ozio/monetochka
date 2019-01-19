# Monetochka

Simple, fast and zero-dependency currency formatting library.

## Usage

```bash
npm install monetochka --save
```

```javascript
import { format } from 'monetochka';

format(10, 'USD'); // $10.00
format(20000, 'RUB'); // 20 000,00 ₽
format(350590, 'EUR', { siRounding: true, siPrecision: 1 }); // 350,6K € 
format(18.729361, 'GBP', { maximumFractionDigits: 0 }); // £19
```

## License

MIT
