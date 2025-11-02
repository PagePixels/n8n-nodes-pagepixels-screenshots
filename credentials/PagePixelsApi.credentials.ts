import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class PagePixelsApi implements ICredentialType {
	name = 'pagePixelsApi';

	displayName = 'PagePixels API';

	icon: Icon = { light: 'file:../icons/pagepixels.svg', dark: 'file:../icons/pagepixels.dark.svg' };

	documentationUrl = 'https://www.pagepixels.com';

	properties: INodeProperties[] = [
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

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '={{$credentials.useBearerPrefix ? `Bearer ${$credentials.apiKey}` : $credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			method: 'GET',
			url: 'https://api.pagepixels.com/real_locations',
		},
	};
}
