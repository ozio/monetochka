/*   Tests   */

const monetochka = require('.');

const testsItself = (exp: (expect: string, real: string) => void) => {
  exp('$10.00', monetochka.format({ value: 10, currency: 'USD' }));
  exp('10,00 $', monetochka.format({ value: 10, currency: 'USD', locale: 'ru' }));
  exp('$100,000.00', monetochka.format({ value: 100000, currency: 'USD' }));
  exp('100,00 €', monetochka.format({ value: 100, currency: 'EUR' }));
  exp('100.000,00 €', monetochka.format({ value: 100000, currency: 'EUR' }));
  exp('10 000,00 ₽', monetochka.format({ value: 10000, currency: 'RUB' }));
  exp('12 345 678,00 kr', monetochka.format({ value: 12345678, currency: 'SEK' }));
  exp('12 345 678 kr', monetochka.format({ value: 12345678, currency: 'SEK', precision: 0 }));
  exp('50K kr', monetochka.format({ value: 50000, currency: 'SEK', si: 0 }));
  exp('50,6K kr', monetochka.format({ value: 50555, currency: 'SEK', si: 1 }));
  exp('₿1,000.00', monetochka.format({ value: 1000, currency: 'BTC' }));
  exp('₿-1,000.00', monetochka.format({ value: -1000, currency: 'BTC' }));
  exp('-10 000,00 ₽', monetochka.format({ value: -10000, currency: 'RUB' }));
  exp('¥5,000', monetochka.format({ value: 5000.21, currency: 'JPY' }));
  exp('15,24 kr', monetochka.f(15.241, 'SEK'));
  exp('10,0K ₽', monetochka.f(10000.54321, 'RUB', { precision: 0, si: 1 }));
  exp('100,50 ₽', monetochka.f(100.5, 'RUB', { precision: 2, si: 1 }));
};

/* -- code for tests -- */

const { spawnSync } = require('child_process');
const fs = require('fs');

const FgGreen = '\x1b[32m';
const Reset = '\x1b[0m';
const Dim = '\x1b[2m';
const isWatching = process.argv.includes('--watch') || process.argv.includes('-w');

const runTests = () => {
  let testsCount = 0;
  let errorsCount = 0;

  const exp = (expect: string, real: string) => {
    testsCount++;
    if (real === expect) {
      console.log(`${FgGreen}%s${Reset}`, `[✓] ${expect}`);
    } else {
      console.log(`${Dim}%s${Reset}`, `[ ] Expected "${expect}", but got "${real}"`);
      errorsCount++;
    }
  };

  console.log('Last run:', new Date());

  testsItself(exp);

  console.log('');
  if (errorsCount > 0) {
    console.log(`${errorsCount} out of ${testsCount} test(-s) has failed.`);
    return 1;
  } else {
    console.log(`Success! All ${testsCount} tests are passed!`);
    return 0;
  }
};

const spawnTests = () => {
  try {
    const output = spawnSync('ts-node', ['./src/tests.ts']);
    console.clear();
    process.stdout.write(output.stdout);
  } catch (e) {
    console.clear();
    process.stdout.write(e);
  }
};

if (isWatching) {
  spawnTests();
  fs.watch('./src', { encoding: 'buffer' }, () => {
    spawnTests();
  });
} else {
  process.exit(runTests());
}
