import { IMonetochkaFormat, IMonetochkaGlobalConfig } from '../index';
export declare const globalConfig: IMonetochkaGlobalConfig;
export declare const format: ({ value, currency, precision, si, locale }: IMonetochkaFormat) => string;
export declare const f: (value: number, currency: string, parameters?: Partial<IMonetochkaFormat>) => string;
declare const _default: {
    globalConfig: IMonetochkaGlobalConfig;
    format: ({ value, currency, precision, si, locale }: IMonetochkaFormat) => string;
    f: (value: number, currency: string, parameters?: Partial<IMonetochkaFormat>) => string;
};
export default _default;
