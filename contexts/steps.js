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
            const title = data.titulo[0].text;

            try {
                const image = data.imagem_destaque.url;

                let itemToPush = {
                    id,
                    title,
                    image,
                    data
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