/**
 * Created by user on 2018/9/9/009.
 */

import YAWN = require('yawn-yaml/cjs');
import bluebird = require('bluebird');
import YAML from 'yaml';
import * as fs from 'fs-extra';

export function parseYAML<T = any>(text: string): {
	yaml: string,
	json: T,

	toString(): string,
	toJSON<T2 = T>(): T2,
}
{
	return new YAWN(text);
}

export function stringifyYAML(data): string
{
	if (data instanceof YAWN)
	{
		return data.yaml;
	}

	return YAML.stringify(data);
}

export function readYAML<T>(file: string, encoding?: string)
{
	return bluebird
		.resolve(fs
		.readFile(file, encoding || 'utf8')
		.then(function (data)
		{
			return parseYAML<T>(data)
		}))
	;
}

export function outputYAML(file: string, data)
{
	return bluebird
		.resolve(data)
		.then(stringifyYAML)
		.then(function (data)
		{
			return fs.outputFile(file, data);
		})
	;
}

export function writeYAML(file: string, data)
{
	return bluebird
		.resolve(data)
		.then(stringifyYAML)
		.then(function (data)
		{
			return fs.writeFile(file, data);
		})
		;
}

export function outputYAMLSync(file: string, data)
{
	return fs.outputFileSync(file, stringifyYAML(data));
}

export function writeYAMLSync(file: string, data)
{
	return fs.writeFileSync(file, stringifyYAML(data));
}

export function readYAMLSync<T>(file: string, encoding?: string)
{
	let data = fs
		.readFileSync(file, encoding || 'utf8')
	;

	return parseYAML<T>(data);
}

export { YAWN }

import * as YAML_FS from '.';
export default YAML_FS
