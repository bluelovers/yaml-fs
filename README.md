# yaml-fs

    YAML File parser that preserves comments and styling

## install

```nodemon
npm install yaml-fs
```

## Demo

[API](index.d.ts)

```ts
import YAML from 'yaml';
import deepEql = require('deep-eql');
import { parseYAML, readYAML, outputYAML } from 'yaml-fs';

let str = `
# my comment
value: 1 # the value is here!
cache:
  directories:
    - ".cache"
    - dist_novel
    - dist_epub
  directories2:
  - ".cache"
  - dist_novel
  - dist_epub
`;

let y1 = YAML.parse(str);
let y2 = parseYAML(str);

console.log('deepEql:', deepEql(y1, y2.json));

console.dir(y2.json, {
	depth: null,
	colors: true,
});

console.log('deepEql2:', deepEql(str, y2.yaml));

console.log(y2.yaml);

// keep comments and styling
outputYAML('./temp/demo1.yml', y2);
// will not keep comments and styling
outputYAML('./temp/demo2.yml', y2.json);


/*
readYAML('.travis.yml')
	.then(function (ls)
	{
		console.log(ls);
	})
;
*/
```

## important

every time get `data.json` will re-parse `data.yaml`

so should set a var for `data.json`

```ts
let dd = data.json;
```

and if wanna update object

```ts
	dd.env = dd.env || {};
	dd.env.global = dd.env.global || [];
	dd.env.global.push(ret);

	// now `data.json` and `data.yaml` is updated
	// this will still preserves comments and styling
	data.json = dd;
```

or use

```ts
	let dd = data.json;

	dd.env = dd.env || {};
	dd.env.global = dd.env.global || [];
	dd.env.global.push(ret);

	return overwriteYAML(dd, data);
```
