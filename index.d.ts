/**
 * Created by user on 2018/9/9/009.
 */
import YAWN = require('yawn-yaml/cjs');
import bluebird = require('bluebird');
export { YAWN };
export declare function parseYAML<T = any>(text: string): {
    yaml: string;
    json: T;
    toString(): string;
    toJSON<T2 = T>(): T2;
};
export declare function stringifyYAML(data: any): string;
export declare function readYAML<T>(file: string, encoding?: string): bluebird<{
    yaml: string;
    json: T;
    toString(): string;
    toJSON<T2 = T>(): T2;
}>;
export declare function outputYAML(file: string, data: any): bluebird<void>;
export declare function writeYAML(file: string, data: any): bluebird<void>;
export declare function outputYAMLSync(file: string, data: any): void;
export declare function writeYAMLSync(file: string, data: any): void;
export declare function readYAMLSync<T>(file: string, encoding?: string): {
    yaml: string;
    json: T;
    toString(): string;
    toJSON<T2 = T>(): T2;
};
import * as YAML_FS from '.';
export default YAML_FS;
