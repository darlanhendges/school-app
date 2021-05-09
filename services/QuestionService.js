import Prismic from '@prismicio/client';
import { PrismicClient } from '../clients';
import ErrorMessages from '../constansts/prismic-error-messages';
import Types from '../constansts/prismic-types';

const at = Prismic.predicates.at;

export default {
  getQuestion: async (id) => {
    try {
      return (await PrismicClient.query(at('document.id', id))).results[0];
    } catch (error) {
      throw new Error(ErrorMessages.Default + error.message);
    }
  },

  getQuestionsByStepId: async (stepId) => {
    try {
      const response = await PrismicClient.query(
        at('my.question.step_id', stepId)
      );

      console.log('getQuestionsByStepId', response.results);
      return response.results;
    } catch (error) {
      console.log(error);
    }
  },
};
