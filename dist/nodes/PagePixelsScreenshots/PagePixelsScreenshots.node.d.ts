import { type INodeType, type INodeTypeDescription, type ILoadOptionsFunctions } from 'n8n-workflow';
export declare class PagePixelsScreenshots implements INodeType {
    description: INodeTypeDescription;
    methods: {
        loadOptions: {
            getRealLocations(this: ILoadOptionsFunctions): Promise<{
                name: string;
                value: string;
            }[]>;
        };
    };
}
