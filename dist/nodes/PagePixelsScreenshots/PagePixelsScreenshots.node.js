"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagePixelsScreenshots = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const metadata_1 = require("./resources/metadata");
const screenshot_1 = require("./resources/screenshot");
const transport_1 = require("./shared/transport");
class PagePixelsScreenshots {
    constructor() {
        this.description = {
            displayName: 'PagePixels Screenshots',
            name: 'pagePixelsScreenshots',
            icon: {
                light: 'file:../../icons/pagepixels.svg',
                dark: 'file:../../icons/pagepixels.dark.svg',
            },
            group: ['input'],
            version: 1,
            subtitle: '={{$parameter["operation"]}}',
            description: 'Capture website screenshots using the PagePixels API',
            defaults: {
                name: 'PagePixels Screenshots',
            },
            usableAsTool: true,
            inputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            credentials: [
                {
                    name: 'pagePixelsApi',
                    required: true,
                    displayOptions: {
                        show: {
                            authentication: ['apiKey'],
                        },
                    },
                },
                {
                    name: 'pagePixelsOAuth2Api',
                    required: true,
                    displayOptions: {
                        show: {
                            authentication: ['oAuth2'],
                        },
                    },
                },
            ],
            requestDefaults: {
                baseURL: 'https://api.pagepixels.com',
                headers: {
                    Accept: 'application/json',
                },
                qs: {
                    json: true,
                },
            },
            properties: [
                {
                    displayName: 'Authentication',
                    name: 'authentication',
                    type: 'options',
                    options: [
                        {
                            name: 'API Key',
                            value: 'apiKey',
                        },
                        {
                            name: 'OAuth2',
                            value: 'oAuth2',
                        },
                    ],
                    default: 'apiKey',
                },
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Screenshot',
                            value: 'screenshot',
                        },
                        {
                            name: 'Metadata',
                            value: 'metadata',
                        },
                    ],
                    default: 'screenshot',
                },
                ...screenshot_1.screenshotOperations,
                ...screenshot_1.screenshotFields,
                ...metadata_1.metadataOperations,
                ...metadata_1.metadataFields,
            ],
        };
        this.methods = {
            loadOptions: {
                async getRealLocations() {
                    const response = await transport_1.pagepixelsApiRequest.call(this, 'GET', '/real_locations');
                    const { results } = response;
                    if (!Array.isArray(results)) {
                        return [];
                    }
                    return results
                        .filter((location) => typeof location === 'string' && location.length > 0)
                        .map((location) => ({ name: location, value: location }));
                },
            },
        };
    }
}
exports.PagePixelsScreenshots = PagePixelsScreenshots;
//# sourceMappingURL=PagePixelsScreenshots.node.js.map