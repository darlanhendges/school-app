import Prismic from '@prismicio/client';
import { PrismicClient } from '../clients';
import ErrorMessages from '../constansts/prismic-error-messages';
import Types from '../constansts/prismic-types';

const at = Prismic.predicates.at;

export default {
    getEtapa: async(id) => {
        try {
            return (await PrismicClient.query(at('document.id', id))).results;
        } catch (error) {
            throw new Error(ErrorMessages.Default + error.message);
        }
    },

    getEtapas: async() => {
        try {
            const response = await PrismicClient.query(
                at('document.type', Types.Etapa),
                { orderings: `[document.first_publication_date]` }
            );

            return response.results;
        } catch (error) {
            alert(ErrorMessages.Default + error.message);
        }
    }
}