import type { INodeProperties } from 'n8n-workflow';

const baseDisplayOptions = {
	show: {
		resource: ['screenshot'],
	},
};

const commonOptionFields: INodeProperties[] = [
	{
		displayName: 'Time Zone',
		name: 'timeZone',
		type: 'string',
		default: '',
		description: 'The website\'s time zone (ICU/IANA identifier, e.g. America/New_York)',
		routing: {
			send: {
				type: 'body',
				property: 'time_zone',
			},
		},
	},
	{
		displayName: 'Wait (Ms)',
		name: 'wait',
		type: 'number',
		default: 0,
		description: 'Milliseconds to wait before capturing the screenshot (max 20000). If you include Multi-Step Actions, this wait happens after those complete.',
		routing: {
			send: {
				type: 'body',
				property: 'wait',
			},
		},
	},
	{
		displayName: 'Wait For Selector',
		name: 'waitFor',
		type: 'string',
		default: '',
		description: 'CSS selector to wait for before capturing the screenshot',
		routing: {
			send: {
				type: 'body',
				property: 'wait_for',
			},
		},
	},
	{
		displayName: 'Multi-Step Actions',
		name: 'multi_step_actions',
		type: 'string',
		default: '[{"type": "click", "selector": "#some-element-on-the-page"}, {"type": "text_field", "selector": "#searchInput", "value": "setting a search input field to a specific value on the webpage."}]',
		description: 'JSON array of actions to perform on the page before capturing the screenshot (e.g. clicks, text input). See https://pagepixels.com/app/screenshots-api-documentation#multi-step-screenshots for the full multi-step reference documentation.',
    typeOptions: {
			rows: 4,
		},
    routing: {
			send: {
				type: 'body',
				property: 'multi_step_actions',
			},
		},
	},
	{
		displayName: 'Incremental Scroll',
		name: 'incrementalScroll',
		type: 'boolean',
		default: false,
		description: 'Whether to slowly scroll the page to trigger lazy-loaded content',
		routing: {
			send: {
				type: 'body',
				property: 'incremental_scroll',
			},
		},
	},
	{
		displayName: 'Viewport Width',
		name: 'pageWidth',
		type: 'number',
		default: 0,
		description: 'Viewport width in pixels (default 1920)',
		routing: {
			send: {
				type: 'body',
				property: 'page_width',
			},
		},
	},
	{
		displayName: 'Viewport Height',
		name: 'pageHeight',
		type: 'number',
		default: 0,
		description: 'Viewport height in pixels (default 1000)',
		routing: {
			send: {
				type: 'body',
				property: 'page_height',
			},
		},
	},
	{
		displayName: 'Full Page',
		name: 'fullPage',
		type: 'boolean',
		default: false,
		description: 'Whether to capture the full scrollable page',
		routing: {
			send: {
				type: 'body',
				property: 'fullpage',
			},
		},
	},
	{
		displayName: 'Full Page (Advanced)',
		name: 'fullPageAdvanced',
		type: 'boolean',
		default: false,
		description: 'Whether to capture the full page using advanced scrolling for complex content',
		routing: {
			send: {
				type: 'body',
				property: 'fullpage_advanced',
			},
		},
	},
	{
		displayName: 'Selector',
		name: 'selector',
		type: 'string',
		default: '',
		description: 'Capture only the element matching this CSS selector',
		routing: {
			send: {
				type: 'body',
				property: 'selectors',
			},
		},
	},
	{
		displayName: 'Hover on Selected',
		name: 'hoverOnSelected',
		type: 'boolean',
		default: false,
		description: 'Whether to hover over the selected element before capture',
		routing: {
			send: {
				type: 'body',
				property: 'hover_on_selected',
			},
		},
	},
	{
		displayName: 'Image Format',
		name: 'imageFormat',
		type: 'options',
		options: [
			{ name: 'JPEG', value: 'jpeg' },
			{ name: 'PNG', value: 'png' },
			{ name: 'WebP', value: 'webp' },
		],
		default: 'jpeg',
		description: 'Image format for the screenshot output',
		routing: {
			send: {
				type: 'body',
				property: 'image_format',
			},
		},
	},
	{
		displayName: 'JPEG Quality',
		name: 'quality',
		type: 'number',
		default: 0,
		description: 'JPEG quality (1-100). Ignored for PNG/WebP.',
		routing: {
			send: {
				type: 'body',
				property: 'quality',
			},
		},
	},
	{
		displayName: 'Scale Factor',
		name: 'scaleFactor',
		type: 'options',
		options: [
			{ name: '1x', value: 1 },
			{ name: '2x (Retina)', value: 2 },
		],
		default: 1,
		description: 'Pixel density multiplier for the screenshot',
		routing: {
			send: {
				type: 'body',
				property: 'scale_factor',
			},
		},
	},
	{
		displayName: 'Inject CSS',
		name: 'cssInject',
		type: 'string',
		default: '',
		description: 'Custom CSS to inject before capture',
		typeOptions: {
			rows: 3,
		},
		routing: {
			send: {
				type: 'body',
				property: 'css_inject',
			},
		},
	},
	{
		displayName: 'Inject JavaScript',
		name: 'jsInject',
		type: 'string',
		default: '',
		description: 'Custom JavaScript to execute before capture',
		typeOptions: {
			rows: 3,
		},
		routing: {
			send: {
				type: 'body',
				property: 'js_inject',
			},
		},
	},
	{
		displayName: 'User Agent',
		name: 'userAgent',
		type: 'string',
		default: '',
		description: 'Override the browser User-Agent string',
		routing: {
			send: {
				type: 'body',
				property: 'user_agent',
			},
		},
	},
	{
		displayName: 'HTTP Headers',
		name: 'headers',
		type: 'string',
		default: '[{"key1": "value1", "key2": "value2"}]',
		description: 'JSON array of HTTP headers to send with the screenshot request to the URL',
		typeOptions: {
			rows: 3,
		},
    routing: {
			send: {
				type: 'body',
				property: 'headers',
			},
		},
	},
	{
		displayName: 'Cookies',
		name: 'cookies',
		type: 'string',
		default: '[{"key1": "value1", "key2": "value2"}]',
    description: 'JSON array of cookies to set for the screenshot request to the URL',
    typeOptions: {
			rows: 3,
		},
    routing: {
			send: {
				type: 'body',
				property: 'cookies',
			},
		},
	},
	{
		displayName: 'Cache TTL (Ms)',
		name: 'ttl',
		type: 'number',
		default: 0,
		description: 'Milliseconds to cache the screenshot (0 always regenerates)',
		routing: {
			send: {
				type: 'body',
				property: 'ttl',
			},
		},
	},
	{
		displayName: 'Accept-Language',
		name: 'acceptLanguage',
		type: 'string',
		default: '',
		description: 'Value for the Accept-Language request header',
		routing: {
			send: {
				type: 'body',
				property: 'accept_language',
			},
		},
	},
	{
		displayName: 'Latitude',
		name: 'latitude',
		type: 'string',
		default: '',
		description: 'Browser latitude for geolocation APIs',
		routing: {
			send: {
				type: 'body',
				property: 'latitude',
			},
		},
	},
	{
		displayName: 'Longitude',
		name: 'longitude',
		type: 'string',
		default: '',
		description: 'Browser longitude for geolocation APIs',
		routing: {
			send: {
				type: 'body',
				property: 'longitude',
			},
		},
	},
	{
		displayName: 'Geolocation Accuracy',
		name: 'accuracy',
		type: 'string',
		default: '',
		description: 'Accuracy radius (meters) for browser geolocation',
		routing: {
			send: {
				type: 'body',
				property: 'accuracy',
			},
		},
	},
	{
		displayName: 'Thumbnail Width',
		name: 'thumbWidth',
		type: 'number',
		default: 0,
		description: 'Thumbnail width in pixels',
		routing: {
			send: {
				type: 'body',
				property: 'thumb_width',
			},
		},
	},
	{
		displayName: 'Thumbnail Height',
		name: 'thumbHeight',
		type: 'number',
		default: 0,
		description: 'Thumbnail height in pixels',
		routing: {
			send: {
				type: 'body',
				property: 'thumb_height',
			},
		},
	},
	{
		displayName: 'Block Ads',
		name: 'noAds',
		type: 'boolean',
		default: false,
		description: 'Whether to block ads in the rendered page',
		routing: {
			send: {
				type: 'body',
				property: 'no_ads',
			},
		},
	},
	{
		displayName: 'Block Trackers',
		name: 'noTracking',
		type: 'boolean',
		default: false,
		description: 'Whether to block analytics and tracking scripts',
		routing: {
			send: {
				type: 'body',
				property: 'no_tracking',
			},
		},
	},
	{
		displayName: 'Hide Cookie Banners',
		name: 'noCookieBanners',
		type: 'boolean',
		default: false,
		description: 'Whether to attempt to hide cookie consent banners',
		routing: {
			send: {
				type: 'body',
				property: 'no_cookie_banners',
			},
		},
	},
	{
		displayName: 'Disable JavaScript',
		name: 'disableJs',
		type: 'boolean',
		default: false,
		description: 'Whether to disable all JavaScript execution',
		routing: {
			send: {
				type: 'body',
				property: 'disable_js',
			},
		},
	},
	{
		displayName: 'Block Third-Party JavaScript',
		name: 'disableThirdPartyJs',
		type: 'boolean',
		default: false,
		description: 'Whether to discard JavaScript from third-party domains',
		routing: {
			send: {
				type: 'body',
				property: 'disable_third_party_js',
			},
		},
	},
	{
		displayName: 'Custom Title',
		name: 'customTitle',
		type: 'string',
		default: '',
		description: 'Custom title to tag the screenshot',
		routing: {
			send: {
				type: 'body',
				property: 'custom_title',
			},
		},
	},
	{
		displayName: 'Custom Description',
		name: 'customDescription',
		type: 'string',
		default: '',
		description: 'Internal note or description for the screenshot',
		routing: {
			send: {
				type: 'body',
				property: 'custom_description',
			},
		},
	},
];

export const screenshotOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: baseDisplayOptions,
		options: [
			{
				name: 'AI Analysis Screenshot',
				value: 'aiAnalysisScreenshot',
				action: 'Take a screenshot and analyze it with AI',
				description: 'Capture a web page screenshot and run AI analysis with a custom prompt',
				routing: {
					request: {
						method: 'POST',
						url: '/snap',
						qs: {
							analyze_image_with_ai: true,
						},
					},
				},
			},
			{
				name: 'Quick Snap',
				value: 'quickSnap',
				action: 'Take a screenshot of a web page',
				description: 'Capture an instant screenshot from a URL',
				routing: {
					request: {
						method: 'POST',
						url: '/snap',
					},
				},
			},
			{
				name: 'Real Location Screenshot',
				value: 'realLocationScreenshot',
				action: 'Capture a screenshot from a real geographic location',
				description: 'Capture screenshots using residential IPs within a chosen location',
				routing: {
					request: {
						method: 'POST',
						url: '/snap'
					},
				},
			},
			{
				name: 'Snap HTML',
				value: 'snapHtml',
				action: 'Take a screenshot of custom HTML',
				description: 'Render supplied HTML and capture it as an image',
				routing: {
					request: {
						method: 'POST',
						url: '/snap_html',
					},
				},
			},
		],
		default: 'quickSnap',
	},
];

export const screenshotFields: INodeProperties[] = [
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		required: true,
		default: '',
		description: 'Public URL to capture (e.g. https://www.wikipedia.org)',
		displayOptions: {
			show: {
				resource: ['screenshot'],
				operation: ['quickSnap', 'realLocationScreenshot', 'aiAnalysisScreenshot'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'url',
			},
		},
	},
	{
		displayName: 'HTML Content',
		name: 'htmlContent',
		type: 'string',
		required: true,
		default: '',
		description: 'Raw HTML to render before taking the screenshot',
		typeOptions: {
			rows: 6,
		},
		displayOptions: {
			show: {
				resource: ['screenshot'],
				operation: ['snapHtml'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'html_content',
			},
		},
	},
	{
		displayName: 'AI Prompt',
		name: 'aiPrompt',
		type: 'string',
		required: true,
		default: '',
		description: 'Prompt instructing the AI how to analyze the captured screenshot (max 2000 characters)',
		typeOptions: {
			rows: 5,
		},
		displayOptions: {
			show: {
				resource: ['screenshot'],
				operation: ['aiAnalysisScreenshot'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'ai_prompt',
			},
		},
	},
	{
		displayName: 'Proxy Location Name or ID',
		name: 'proxyServer',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getRealLocations',
		},
		required: true,
		default: '',
		description: 'Residential IP location to route the screenshot through. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		displayOptions: {
			show: {
				resource: ['screenshot'],
				operation: ['realLocationScreenshot'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'proxy_server',
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		default: {},
		placeholder: 'Add Option',
		displayOptions: {
			show: {
				resource: ['screenshot'],
				operation: [
					'aiAnalysisScreenshot',
					'quickSnap',
					'realLocationScreenshot',
					'snapHtml',
				],
			},
		},
		options: commonOptionFields,
	},
];
