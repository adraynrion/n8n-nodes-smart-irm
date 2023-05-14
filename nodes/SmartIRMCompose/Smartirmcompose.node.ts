import type { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class Smartirmcompose implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Smart IRM - Compose',
		name: 'smartirmcompose',
		icon: 'file:smartirmcompose.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Request a Smart IRM Compose API',
		defaults: {
			name: 'Smart IRM - Compose',
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
