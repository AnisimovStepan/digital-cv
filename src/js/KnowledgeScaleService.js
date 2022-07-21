require('../scss/knowledgeScaleStyle.scss');

export const createKnowledgeScaleElement = (parentElement, scale) => {

    const scaleCntr = document.createElement('div');
    scaleCntr.classList.add('scale-container');

    for (let i = 0; i < 5; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');

        if (scale - 1 < i) {
            dot.classList.add('transparent');
        }

        scaleCntr.appendChild(dot);
    }

    parentElement.appendChild(scaleCntr);
};
