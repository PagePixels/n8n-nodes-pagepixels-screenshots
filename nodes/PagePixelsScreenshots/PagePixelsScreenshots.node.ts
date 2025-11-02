import {
	NodeConnectionTypes,
	type INodeType,
	type INodeTypeDescription,
	type ILoadOptionsFunctions,
} from 'n8n-workflow';

import { metadataFields, metadataOperations } from './resources/metadata';
import { screenshotFields, screenshotOperations } from './resources/screenshot';
import { pagepixelsApiRequest } from './shared/transport';

type RealLocationsResponse = {
	success?: boolean;
	results?: string[];
};

export class PagePixelsScreenshots implements INodeType {
	description: INodeTypeDescription = {
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
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
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
			...screenshotOperations,
			...screenshotFields,
			...metadataOperations,
			...metadataFields,
		],
	};

	methods = {
		loadOptions: {
			async getRealLocations(this: ILoadOptionsFunctions) {
				const response = await pagepixelsApiRequest.call(
					this,
					'GET',
					'/real_locations',
				);

				const { results } = response as RealLocationsResponse;

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
