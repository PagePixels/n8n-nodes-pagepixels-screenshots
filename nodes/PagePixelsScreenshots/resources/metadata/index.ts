import type { INodeProperties } from 'n8n-workflow';

const displayOptions = {
	show: {
		resource: ['metadata'],
	},
};

export const metadataOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions,
		options: [
			{
				name: 'List Real Locations',
				value: 'listRealLocations',
				action: 'List real locations',
				description: 'Retrieve the available residential proxy locations',
				routing: {
					request: {
						method: 'GET',
						url: '/real_locations',
					},
				},
			},
		],
		default: 'listRealLocations',
	},
];

export const metadataFields: INodeProperties[] = [];
