# Monetochka

Simple, fast and zero-dependency currency formatter.

## Usage

```bash
npm install monetochka --save
```

```javascript
import monetochka from 'monetochka';

monetochka.format({ value: 10, currency: 'USD' }); // $10.00
monetochka.format({ value: 20000, currency: 'RUB' }); // 20 000,00 ₽
monetochka.format({ value: 350590, currency: 'EUR', k: 1 }) // 350,6K € 
```

## License

MIT
