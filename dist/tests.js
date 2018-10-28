"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var exp = function (expect, real) {
    if (real === expect) {
        console.log("[+] " + expect);
    }
    else {
        console.log("[ ] Expected \"" + expect + "\", but got \"" + real + "\"");
    }
};
exp('$10.00', _1.default.format({ value: 10, currency: 'USD' }));
exp('10,00 $', _1.default.format({ value: 10, currency: 'USD', locale: 'ru' }));
exp('$100,000.00', _1.default.format({ value: 100000, currency: 'USD' }));
exp('100,00 €', _1.default.format({ value: 100, currency: 'EUR' }));
exp('100.000,00 €', _1.default.format({ value: 100000, currency: 'EUR' }));
exp('10 000,00 ₽', _1.default.format({ value: 10000, currency: 'RUB' }));
exp('12 345 678,00 kr', _1.default.format({ value: 12345678, currency: 'SEK' }));
exp('12 345 678 kr', _1.default.format({ value: 12345678, currency: 'SEK', precision: 0 }));
exp('50K kr', _1.default.format({ value: 50000, currency: 'SEK', si: 0 }));
exp('50,6K kr', _1.default.format({ value: 50555, currency: 'SEK', si: 1 }));
exp('BTC1,000.00', _1.default.format({ value: 1000, currency: 'BTC' }));
exp('BTC-1,000.00', _1.default.format({ value: -1000, currency: 'BTC' }));
exp('-10 000,00 ₽', _1.default.format({ value: -10000, currency: 'RUB' }));
exp('¥5,000', _1.default.format({ value: 5000.21, currency: 'JPY' }));
