import { injectable, inject } from 'inversify';
import { ServiceIdentifiers } from '../../container/ServiceIdentifiers';

import * as format from 'string-template';

import { IOptions } from '../../interfaces/options/IOptions';

import { initializable } from '../../decorators/Initializable';

import { DebugProtectionFunctionTemplate } from '../../templates/custom-nodes/debug-protection-nodes/debug-protection-function-node/DebugProtectionFunctionTemplate';

import { AbstractCustomNode } from '../AbstractCustomNode';

@injectable()
export class DebugProtectionFunctionNode extends AbstractCustomNode {
    /**
     * @type {string}
     */
    @initializable()
    private debugProtectionFunctionName: string;

    /**
     * @param options
     */
    constructor (
        @inject(ServiceIdentifiers.IOptions) options: IOptions
    ) {
        super(options);
    }

    /**
     * @param debugProtectionFunctionName
     */
    public initialize (debugProtectionFunctionName: string): void {
        this.debugProtectionFunctionName = debugProtectionFunctionName;
    }

    /**
     * @returns {string}
     */
    protected getTemplate (): string {
        return format(DebugProtectionFunctionTemplate(), {
            debugProtectionFunctionName: this.debugProtectionFunctionName
        });
    }
}
