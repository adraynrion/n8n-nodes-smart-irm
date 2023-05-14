import type { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class Smartirmsystem implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Smart IRM - System',
		name: 'smartirmsystem',
		icon: 'file:smartirmsystem.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Request a Smart IRM System API',
		defaults: {
			name: 'Smart IRM - System',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'SmartIRMApi',
				required: true,
			},
		],
		requestDefaults: {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			// Resources

			// Operations

			// Optional/additional fields
		]
	};
}
