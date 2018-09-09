/**
 * Created by user on 2018/9/9/009.
 */

import YAWN = require('yawn-yaml/cjs');
import bluebird = require('bluebird');
import YAML from 'yaml';
import * as fs from 'fs-extra';
import { crlf, chkcrlf, LF, CRLF, CR } from 'crlf-normalize';

export interface IParseYAML<T = any>
{
	yaml: string,
	json: T,

	toString(): string,
	toJSON<T2 = T>(): T2,
}

export function parseYAML<T = any>(text: string, options?: IParseYAMLOptions): IParseYAML<T>
{
	if (options)
	{
		if (options.disablePreserve)
		{
			text = YAML.stringify(YAML.parse(text));
		}

		if (options.eol)
		{
			let eol = ((options.eol === true) ? LF : options.eol);

			text = crlf(text, eol);
		}
	}

	return new YAWN<T>(text);
}

export interface IYAMLOptions
{
	eol?: boolean | string,
	disablePreserve?: boolean,
}

export type IParseYAMLOptions = IYAMLOptions & {

}

export type IStringifyYAMLOptions = IYAMLOptions & {

}

export function stringifyYAML(data, options?: IStringifyYAMLOptions): string
{
	let output: string;

	if (data instanceof YAWN)
	{
		if (options && options.disablePreserve)
		{
			output = YAML.stringify(data.json);
		}
		else
		{
			output = data.yaml;
		}
	}
	else
	{
		output = YAML.stringify(data);
	}

	if (options && options.eol)
	{
		let eol = ((options.eol === true) ? LF : options.eol);

		output = crlf(output, eol);
	}

	return output;
}

export function overwriteYAML<T>(data: T, yaml: IParseYAML): IParseYAML<T>
{
	if (yaml instanceof YAWN)
	{
		yaml.json = data;

		return yaml;
	}

	throw new TypeError(`input yaml not get from parseYAML`)
}

export function readYAML<T = any>(file: string, encoding?: string)
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

export function readYAMLSync<T = any>(file: string, encoding?: string)
{
	let data = fs
		.readFileSync(file, encoding || 'utf8')
	;

	return parseYAML<T>(data);
}

export function outputYAML(file: string, data, options?: IStringifyYAMLOptions)
{
	return bluebird
		.resolve(data)
		.then(function (data)
		{
			return stringifyYAML(data, options)
		})
		.then(function (data)
		{
			return fs.outputFile(file, data);
		})
	;
}

export function writeYAML(file: string, data, options?: IStringifyYAMLOptions)
{
	return bluebird
		.resolve(data)
		.then(function (data)
		{
			return stringifyYAML(data, options)
		})
		.then(function (data)
		{
			return fs.writeFile(file, data);
		})
		;
}

export function outputYAMLSync(file: string, data, options?: IStringifyYAMLOptions)
{
	return fs.outputFileSync(file, stringifyYAML(data, options));
}

export function writeYAMLSync(file: string, data, options?: IStringifyYAMLOptions)
{
	return fs.writeFileSync(file, stringifyYAML(data, options));
}

export { YAWN, YAML }

import * as YAML_FS from '.';
export default YAML_FS
