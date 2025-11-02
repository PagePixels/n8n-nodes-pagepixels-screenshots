"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagepixelsApiRequest = pagepixelsApiRequest;
async function pagepixelsApiRequest(method, resource, qs = {}, body = undefined) {
    const authentication = this.getNodeParameter('authentication', 0);
    const options = {
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
//# sourceMappingURL=transport.js.map