import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class SmartirmApi implements ICredentialType {
	name = 'smartirmApi';
	displayName = 'Smart IRM API';
	// documentationUrl = '';
	properties: INodeProperties[] = [
		// TODO
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			// TODO
		},
	};
	test: ICredentialTestRequest = {
		request: {
			// TODO
		}
	}
}
