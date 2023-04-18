import { Directus } from '@directus/sdk';
import Authentication from './Authentication';

const baseURL = import.meta.env.VITE_API_BASE_URL
const accessToken = import.meta.env.VITE_DIRECTUS_STATIC_TOKEN


const client = (override={}) => {
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
	const updatedConfig = {...config, ...override}
	return new Directus(baseURL, updatedConfig)
}

const directus = client()
const authentication = new Authentication(directus)

export {directus, authentication, accessToken, baseURL, client}