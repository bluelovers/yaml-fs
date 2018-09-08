/**
 * Created by user on 2018/9/9/009.
 */
import YAWN = require('yawn-yaml/cjs');
import bluebird = require('bluebird');
import YAML from 'yaml';
export interface IStringifyYAMLOptions {
    disablePreserve?: boolean;
}
export declare function parseYAML<T = any>(text: string): {
    yaml: string;
    json: T;
    toString(): string;
    toJSON<T2 = T>(): T2;
};
export declare function stringifyYAML(data: any, options?: IStringifyYAMLOptions): string;
export declare function readYAML<T = any>(file: string, encoding?: string): bluebird<{
    yaml: string;
    json: T;
    toString(): string;
    toJSON<T2 = T>(): T2;
}>;
export declare function readYAMLSync<T = any>(file: string, encoding?: string): {
    yaml: string;
    json: T;
    toString(): string;
    toJSON<T2 = T>(): T2;
};
export declare function outputYAML(file: string, data: any, options?: IStringifyYAMLOptions): bluebird<void>;
export declare function writeYAML(file: string, data: any, options?: IStringifyYAMLOptions): bluebird<void>;
export declare function outputYAMLSync(file: string, data: any, options?: IStringifyYAMLOptions): void;
export declare function writeYAMLSync(file: string, data: any, options?: IStringifyYAMLOptions): void;
export { YAWN, YAML };
import * as YAML_FS from '.';
export default YAML_FS;
