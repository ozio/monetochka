import monetochka from '.';

const exp = (expect: string, real: string) => {
  if (real === expect) {
    console.log(`[+] ${expect}`);
  } else {
    console.log(`[ ] Expected "${expect}", but got "${real}"`);
  }
};

exp('$10.00', monetochka.format({ value: 10, currency: 'USD' }));
exp('$100,000.00', monetochka.format({ value: 100000, currency: 'USD' }));
exp('100,00 €', monetochka.format({ value: 100, currency: 'EUR' }));
exp('100.000,00 €', monetochka.format({ value: 100000, currency: 'EUR' }));
exp('10 000,00 ₽', monetochka.format({ value: 10000, currency: 'RUB' }));
exp('12 345 678,00 kr', monetochka.format({ value: 12345678, currency: 'SEK' }));
exp('12 345 678 kr', monetochka.format({ value: 12345678, currency: 'SEK', precision: 0 }));
exp('50K kr', monetochka.format({ value: 50000, currency: 'SEK', k: 0 }));
exp('50,6K kr', monetochka.format({ value: 50555, currency: 'SEK', k: 1 }));
exp('BTC1,000.00', monetochka.format({ value: 1000, currency: 'BTC' }));
exp('BTC-1,000.00', monetochka.format({ value: -1000, currency: 'BTC' }));
exp('-10 000,00 ₽', monetochka.format({ value: -10000, currency: 'RUB' }));
exp('¥5,000', monetochka.format({ value: 5000.21, currency: 'JPY' }));
