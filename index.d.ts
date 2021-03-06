/**
 * Created by user on 2018/9/9/009.
 */
import YAWN = require('yawn-yaml/cjs');
import bluebird = require('bluebird');
import YAML from 'yaml';
export interface IParseYAML<T = any> {
    yaml: string;
    json: T;
    toString(): string;
    toJSON<T2 = T>(): T2;
}
export declare function parseYAML<T = any>(text: string, options?: IParseYAMLOptions): IParseYAML<T>;
export interface IYAMLOptions {
    eol?: boolean | string;
    disablePreserve?: boolean;
}
export declare type IParseYAMLOptions = IYAMLOptions & {};
export declare type IStringifyYAMLOptions = IYAMLOptions & {};
export declare function stringifyYAML(data: any, options?: IStringifyYAMLOptions): string;
export declare function overwriteYAML<T>(data: T, yaml: IParseYAML): IParseYAML<T>;
export declare function readYAML<T = any>(file: string, encoding?: string): bluebird<IParseYAML<T>>;
export declare function readYAMLSync<T = any>(file: string, encoding?: string): IParseYAML<T>;
export declare function outputYAML(file: string, data: any, options?: IStringifyYAMLOptions): bluebird<void>;
export declare function writeYAML(file: string, data: any, options?: IStringifyYAMLOptions): bluebird<void>;
export declare function outputYAMLSync(file: string, data: any, options?: IStringifyYAMLOptions): void;
export declare function writeYAMLSync(file: string, data: any, options?: IStringifyYAMLOptions): void;
export { YAWN, YAML };
import * as YAML_FS from '.';
export default YAML_FS;
