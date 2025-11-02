"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagePixelsOAuth2Api = void 0;
class PagePixelsOAuth2Api {
    constructor() {
        this.name = 'pagePixelsOAuth2Api';
        this.extends = ['oAuth2Api'];
        this.displayName = 'PagePixels OAuth2 API';
        this.icon = { light: 'file:../icons/pagepixels.svg', dark: 'file:../icons/pagepixels.dark.svg' };
        this.documentationUrl = 'https://pagepixels.com/app/screenshots-api-documentation';
        this.properties = [
            {
                displayName: 'Grant Type',
                name: 'grantType',
                type: 'hidden',
                default: 'authorizationCode',
            },
            {
                displayName: 'Authorization URL',
                name: 'authUrl',
                type: 'hidden',
                default: 'https://pagepixels.com/oauth/authorize',
                required: true,
            },
            {
                displayName: 'Access Token URL',
                name: 'accessTokenUrl',
                type: 'hidden',
                default: 'https://pagepixels.com/oauth/token',
                required: true,
            },
            {
                displayName: 'Scope',
                name: 'scope',
                type: 'hidden',
                default: '',
            },
            {
                displayName: 'Auth URI Query Parameters',
                name: 'authQueryParameters',
                type: 'hidden',
                default: '',
            },
            {
                displayName: 'Authentication',
                name: 'authentication',
                type: 'hidden',
                default: 'header',
            },
        ];
    }
}
exports.PagePixelsOAuth2Api = PagePixelsOAuth2Api;
//# sourceMappingURL=PagePixelsOAuth2Api.credentials.js.map