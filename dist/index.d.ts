import { IMonetochkaFormat, IMonetochkaGlobalConfig } from '../index';
export declare const globalConfig: IMonetochkaGlobalConfig;
export declare const format: ({ value, currency, precision, si, locale }: IMonetochkaFormat) => string;
declare const _default: {
    globalConfig: IMonetochkaGlobalConfig;
    format: ({ value, currency, precision, si, locale }: IMonetochkaFormat) => string;
};
export default _default;
