/**
 * Created by user on 2018/9/9/009.
 */

import YAML from 'yaml';
import deepEql = require('deep-eql');
import { parseYAML } from '..';
import { outputYAML, readYAML } from '../index';

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
