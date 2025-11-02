# n8n-nodes-pagepixels-screenshots

This n8n community node lets you trigger the PagePixels Screenshots API directly from your workflows. Capture high-fidelity website screenshots, render custom HTML, request residential proxy captures, and pair each image with AI-powered analysis — no custom HTTP node required.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation, then install this package with:

```bash
npm install n8n-nodes-pagepixels-screenshots
```

Restart n8n and the node will appear in the editor.

## Operations

All operations return the raw PagePixels response, including the screenshot asset URLs, embed links, job IDs, and AI metadata when available.

- **Quick Snap** – Capture an instant screenshot from any public URL.
- **Snap HTML** – Render supplied HTML (with optional CSS/JS injection) and capture the output.
- **Real Location Screenshot** – Capture a page through PagePixels’ residential proxy network (countries, regions, and major cities).
- **AI Analysis Screenshot** – Take a screenshot and run an AI visual analysis using your custom prompt.

Each operation exposes the full set of optional PagePixels parameters — viewport size, wait conditions, multi-step actions, ad/cookie blocking, geolocation overrides, headers, cookies, caching, and more.

## Credentials

Configure one of the two supported authentication strategies in n8n.

### API key

1. Sign in to [PagePixels](https://pagepixels.com) and create an API key in the dashboard.
2. Add the **PagePixels API** credential in n8n and paste the key.
3. Leave “Use Bearer Prefix” enabled unless your key must be sent in plain text.
4. (Optional) Provide extra headers in the node if you need to override the default `Authorization: Bearer` header.

### OAuth2

1. Register an OAuth app in the PagePixels dashboard or contact support for production credentials.
2. In n8n, create a **PagePixels OAuth2 API** credential.
3. Use `https://pagepixels.com/oauth/authorize` as the authorization URL and `https://pagepixels.com/oauth/token` as the access token URL (defaults are pre-filled).
4. Enter your client ID and client secret, then complete the OAuth handshake when prompted in a workflow.

## Compatibility

Compatible with n8n v1.60.0 or later.

## Usage

1. Drop the **PagePixels Screenshots** node into your workflow and select the desired operation.
2. Choose the authentication method and credential.
3. Provide the required fields (`URL`, `HTML Content`, `AI Prompt`, or `Proxy Location`, depending on the operation).
4. Expand **Options** to set advanced rendering controls (multi-step actions, viewport, selectors, blocking flags, etc.).
5. Execute the workflow to receive the screenshot metadata, including direct download links and analysis output.

Tip: Chain the output into an **HTTP Request**, **Webhook**, or **Drive** node to archive images, notify teams, or trigger downstream automations.

## Resources

- [PagePixels Screenshots API documentation](https://pagepixels.com/app/screenshots-api-documentation)
- [PagePixels support](https://pagepixels.com/support)
- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
