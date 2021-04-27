import React, { createContext, useState } from 'react';
import StepService from '../services/StepService';

export const StepsContext = createContext({ steps: '', setSteps: null, getSteps: null });


export default ({ children }) => {
    const [steps, setSteps] = useState([]);

    async function getSteps() {

        const steps = await StepService.getSteps();
        let stepsBuilt = [];

        steps.map((item) => {
            const { id, data } = item;
            

            try {

                let itemToPush = {
                    id,
                    title: data.title[0].text,
                    subtitle: data.subtitle[0].text,
                    featured_image: data.featured_image.url,
                    step_presentation: data.step_presentation[0].text,
                    presentation_image: data.presentation_image.url,
                    presentation_text: data.presentation_text[0].text,
                    step_completion_message: data.step_completion_message[0].text
                };
                stepsBuilt.push(itemToPush);
                setSteps(stepsBuilt);
            }
            catch (e) {
                alert('Não foi possível montar a etapa: ' + title);
            }
        });
    }

    return (
        <StepsContext.Provider value={{ steps, setSteps, getSteps }}>
            {children}
        </StepsContext.Provider>
    );
};