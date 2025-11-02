import type { Icon, ICredentialType, INodeProperties } from 'n8n-workflow';

export class PagePixelsOAuth2Api implements ICredentialType {
	name = 'pagePixelsOAuth2Api';

	extends = ['oAuth2Api'];

	displayName = 'PagePixels OAuth2 API';

	icon: Icon = { light: 'file:../icons/pagepixels.svg', dark: 'file:../icons/pagepixels.dark.svg' };

	documentationUrl = 'https://pagepixels.com/app/screenshots-api-documentation';

	properties: INodeProperties[] = [
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
