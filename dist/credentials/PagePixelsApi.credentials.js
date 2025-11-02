"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagePixelsApi = void 0;
class PagePixelsApi {
    constructor() {
        this.name = 'pagePixelsApi';
        this.displayName = 'PagePixels API';
        this.icon = { light: 'file:../icons/pagepixels.svg', dark: 'file:../icons/pagepixels.dark.svg' };
        this.documentationUrl = 'https://www.pagepixels.com';
        this.properties = [
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                default: '',
                required: true,
                description: 'Create an API key in the PagePixels dashboard and paste it here.',
                typeOptions: {
                    password: true,
                },
            },
            {
                displayName: 'Use Bearer Prefix',
                name: 'useBearerPrefix',
                type: 'boolean',
                default: true,
                description: 'Prefix the API key with "Bearer" in the Authorization header. Disable if your key should be sent as-is.',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    Authorization: '={{$credentials.useBearerPrefix ? `Bearer ${$credentials.apiKey}` : $credentials.apiKey}}',
                },
            },
        };
        this.test = {
            request: {
                method: 'GET',
                url: 'https://api.pagepixels.com/real_locations',
            },
        };
    }
}
exports.PagePixelsApi = PagePixelsApi;
//# sourceMappingURL=PagePixelsApi.credentials.js.map