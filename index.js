"use strict";
/**
 * Created by user on 2018/9/9/009.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const YAWN = require("yawn-yaml/cjs");
exports.YAWN = YAWN;
const bluebird = require("bluebird");
const yaml_1 = require("yaml");
const fs = require("fs-extra");
function parseYAML(text) {
    return new YAWN(text);
}
exports.parseYAML = parseYAML;
function stringifyYAML(data) {
    if (data instanceof YAWN) {
        return data.yaml;
    }
    return yaml_1.default.stringify(data);
}
exports.stringifyYAML = stringifyYAML;
function readYAML(file, encoding) {
    return bluebird
        .resolve(fs
        .readFile(file, encoding || 'utf8')
        .then(function (data) {
        return parseYAML(data);
    }));
}
exports.readYAML = readYAML;
function outputYAML(file, data) {
    return bluebird
        .resolve(data)
        .then(stringifyYAML)
        .then(function (data) {
        return fs.outputFile(file, data);
    });
}
exports.outputYAML = outputYAML;
function writeYAML(file, data) {
    return bluebird
        .resolve(data)
        .then(stringifyYAML)
        .then(function (data) {
        return fs.writeFile(file, data);
    });
}
exports.writeYAML = writeYAML;
function outputYAMLSync(file, data) {
    return fs.outputFileSync(file, stringifyYAML(data));
}
exports.outputYAMLSync = outputYAMLSync;
function writeYAMLSync(file, data) {
    return fs.writeFileSync(file, stringifyYAML(data));
}
exports.writeYAMLSync = writeYAMLSync;
function readYAMLSync(file, encoding) {
    let data = fs
        .readFileSync(file, encoding || 'utf8');
    return parseYAML(data);
}
exports.readYAMLSync = readYAMLSync;
const YAML_FS = require(".");
exports.default = YAML_FS;
