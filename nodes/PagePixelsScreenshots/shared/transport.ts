import type {
	IDataObject,
	IExecuteFunctions,
	IExecuteSingleFunctions,
	IHookFunctions,
	IHttpRequestMethods,
	IHttpRequestOptions,
	ILoadOptionsFunctions,
} from 'n8n-workflow';

export async function pagepixelsApiRequest(
	this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	resource: string,
	qs: IDataObject = {},
	body: IDataObject | undefined = undefined,
) {
	const authentication = this.getNodeParameter('authentication', 0);

	const options: IHttpRequestOptions = {
		method,
		qs,
		body,
		url: `https://api.pagepixels.com${resource}`,
		json: true,
	};

	if (Object.keys(qs).length === 0) {
		delete options.qs;
	}

	if (!body || Object.keys(body).length === 0) {
		delete options.body;
	}

	const credentialType = authentication === 'apiKey' ? 'pagePixelsApi' : 'pagePixelsOAuth2Api';

	return this.helpers.httpRequestWithAuthentication.call(this, credentialType, options);
}
