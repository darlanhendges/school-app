import Prismic from '@prismicio/client';
import { PRISMIC_API_ENDPOINT, PRISMIC_API_ACCESS_TOKEN } from '@env';

const client = Prismic.client(PRISMIC_API_ENDPOINT, { accessToken: PRISMIC_API_ACCESS_TOKEN });
export default client;