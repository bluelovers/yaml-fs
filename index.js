"use strict";
/**
 * Created by user on 2018/9/9/009.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const YAWN = require("yawn-yaml/cjs");
exports.YAWN = YAWN;
const bluebird = require("bluebird");
const yaml_1 = require("yaml");
exports.YAML = yaml_1.default;
const fs = require("fs-extra");
const crlf_normalize_1 = require("crlf-normalize");
function parseYAML(text, options) {
    if (options) {
        if (options.disablePreserve) {
            text = yaml_1.default.stringify(yaml_1.default.parse(text));
        }
        if (options.eol) {
            let eol = ((options.eol === true) ? crlf_normalize_1.LF : options.eol);
            text = crlf_normalize_1.crlf(text, eol);
        }
    }
    return new YAWN(text);
}
exports.parseYAML = parseYAML;
function stringifyYAML(data, options) {
    let output;
    if (data instanceof YAWN) {
        if (options && options.disablePreserve) {
            output = yaml_1.default.stringify(data.json);
        }
        else {
            output = data.yaml;
        }
    }
    else {
        output = yaml_1.default.stringify(data);
    }
    if (options && options.eol) {
        let eol = ((options.eol === true) ? crlf_normalize_1.LF : options.eol);
        output = crlf_normalize_1.crlf(output, eol);
    }
    return output;
}
exports.stringifyYAML = stringifyYAML;
function overwriteYAML(data, yaml) {
    if (yaml instanceof YAWN) {
        yaml.json = data;
        return yaml;
    }
    throw new TypeError(`input yaml not get from parseYAML`);
}
exports.overwriteYAML = overwriteYAML;
function readYAML(file, encoding) {
    return bluebird
        .resolve(fs
        .readFile(file, encoding || 'utf8')
        .then(function (data) {
        return parseYAML(data);
    }));
}
exports.readYAML = readYAML;
function readYAMLSync(file, encoding) {
    let data = fs
        .readFileSync(file, encoding || 'utf8');
    return parseYAML(data);
}
exports.readYAMLSync = readYAMLSync;
function outputYAML(file, data, options) {
    return bluebird
        .resolve(data)
        .then(function (data) {
        return stringifyYAML(data, options);
    })
        .then(function (data) {
        return fs.outputFile(file, data);
    });
}
exports.outputYAML = outputYAML;
function writeYAML(file, data, options) {
    return bluebird
        .resolve(data)
        .then(function (data) {
        return stringifyYAML(data, options);
    })
        .then(function (data) {
        return fs.writeFile(file, data);
    });
}
exports.writeYAML = writeYAML;
function outputYAMLSync(file, data, options) {
    return fs.outputFileSync(file, stringifyYAML(data, options));
}
exports.outputYAMLSync = outputYAMLSync;
function writeYAMLSync(file, data, options) {
    return fs.writeFileSync(file, stringifyYAML(data, options));
}
exports.writeYAMLSync = writeYAMLSync;
const YAML_FS = require(".");
exports.default = YAML_FS;
