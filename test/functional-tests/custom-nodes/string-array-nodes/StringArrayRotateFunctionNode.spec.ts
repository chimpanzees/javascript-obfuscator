import { assert } from 'chai';

import { IObfuscationResult } from '../../../../src/interfaces/IObfuscationResult';

import { NO_CUSTOM_NODES_PRESET } from '../../../../src/options/presets/NoCustomNodes';

import { JavaScriptObfuscator } from '../../../../src/JavaScriptObfuscator';

describe('StringArrayRotateFunctionNode', () => {
    it('should correctly append `StringArrayRotateFunctionNode` custom node into the obfuscated code if `rotateStringArray` option is set', () => {
        let obfuscationResult: IObfuscationResult = JavaScriptObfuscator.obfuscate(
            `var test = 'test';`,
            {
                ...NO_CUSTOM_NODES_PRESET,
                rotateStringArray: true,
                stringArray: true,
                stringArrayThreshold: 1
            }
        );

        assert.match(obfuscationResult.getObfuscatedCode(), /while *\(-- *_0x([a-z0-9]){4,6}\) *\{/);
    });

    it('should\'t append `StringArrayRotateFunctionNode` custom node into the obfuscated code if `rotateStringArray` option is not set', () => {
        let obfuscationResult: IObfuscationResult = JavaScriptObfuscator.obfuscate(
            `var test = 'test';`,
            {
                ...NO_CUSTOM_NODES_PRESET,
                rotateStringArray: false,
                stringArray: true,
                stringArrayThreshold: 1
            }
        );

        assert.notMatch(obfuscationResult.getObfuscatedCode(), /while *\(-- *_0x([a-z0-9]){4,6}\) *\{/);
    });
});
