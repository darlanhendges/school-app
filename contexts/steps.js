import React, { createContext, useState } from 'react';
import { QuestionService } from '../services';
import StepService from '../services/StepService';

export const StepsContext = createContext({
  steps: '',
  setSteps: null,
  getSteps: null,
  getQuestionByStep: null,
});

export default ({ children }) => {
  const [steps, setSteps] = useState([]);

  async function getSteps() {
    const steps = await StepService.getSteps();
    let stepsBuilt = [];

    steps.map((item) => {
      const { id, data } = item;

      try {
        let itemToPush = {
          id: id,
          title: data.title ? data.title[0].text : '',
          subtitle: data.subtitle.length > 0 ? data.subtitle[0].text : '',
          featured_image: data.featured_image.url,
          step_presentation:
            data.step_presentation.length > 0
              ? data.step_presentation[0].text
              : '',
          presentation_image: data.presentation_image.url,
          presentation_text:
            data.presentation_text.length > 0
              ? data.presentation_text[0].text
              : '',
          presentation_youtube: data.presentation_youtube,
          step_completion_message:
            data.step_completion_message.length > 0
              ? data.step_completion_message[0].text
              : '',
          step_completion_youtube: data.step_completion_youtube,
          questions: [],
        };

        stepsBuilt.push(itemToPush);
      } catch (e) {
        alert('Não foi possível montar a etapa: ' + e);
      }
    });

    setSteps(stepsBuilt);
  }

  async function getQuestionByStep(stepId) {
    try {
      const response = await QuestionService.getQuestionsByStepId(stepId);
      return response.results;
    } catch (e) {
      alert('Não foi possível montar as questões.');
    }
  }

  return (
    <StepsContext.Provider
      value={{ steps, setSteps, getSteps, getQuestionByStep }}
    >
      {children}
    </StepsContext.Provider>
  );
};
