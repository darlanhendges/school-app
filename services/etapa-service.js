import Prismic from '@prismicio/client';
import { PrismicClient } from '../clients';

export default {
    getSteps: async() => await PrismicClient.query(Prismic.predicates.at('document.type', 'question'))
}