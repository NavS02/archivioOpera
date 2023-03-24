import { Directus } from '@directus/sdk';
import Authentication from './Authentication';

const baseURL = import.meta.env.VITE_API_BASE_URL
const accessToken = import.meta.env.VITE_DIRECTUS_STATIC_TOKEN

const config = {
	auth: {
		mode: 'json', // 'json' in Node.js
		autoRefresh: true,
		msRefreshBeforeExpires: 30000,
		// staticToken: accessToken,
	},
	storage: {
		prefix: '',
		mode: 'LocalStorage', // 'MemoryStorage' in Node.js
	},
	transport: {
		params: {},
		headers: {},
		onUploadProgress: (ProgressEvent) => {},
		maxBodyLength: null,
		maxContentLength: null,
	},
};

const directus = new Directus(baseURL, config)
const authentication = new Authentication(directus)

export {directus, authentication}