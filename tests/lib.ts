import { defaultLocales, locales } from '../src/lib';
import { MLocaleSettings } from '../src';

const isNormalLocale = (locale: MLocaleSettings) => {
  return (
    typeof locale.g === 'string' &&
    typeof locale.d === 'string' &&
    typeof locale.f === 'number' &&
    typeof locale.t === 'string' &&
    typeof locale.h === 'undefined'
  );
};

test('All locale proxies routes to existing locale', () => {
  Object.keys(locales).forEach(key => {
    if (!locales[key].h) return;

    const proxyLocale = locales[locales[key].h];

    expect(proxyLocale).toBeDefined();
    expect(isNormalLocale(proxyLocale)).toBeTruthy();
  });
});

test('All currencies routes to existing locale', () => {
  Object.keys(defaultLocales).forEach(key => {
    expect(locales[defaultLocales[key]]).toBeDefined();
  });
});
