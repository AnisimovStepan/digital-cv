require('../scss/knowledgeScaleStyle.scss');

export const createKnowledgeScaleElement = (name, scale) => {

    const cntr = document.createElement('div');
    cntr.classList.add('ks-container');

    const hdr = document.createElement('div');
    hdr.classList.add('text-header');
    hdr.innerHTML = name;
    cntr.appendChild(hdr);

    const scaleCntr = document.createElement('div');
    scaleCntr.classList.add('scale-container');

    for (let i = 0; i < 5; i++) {
        const dot = document.createElement('div');

        if (scale - 1 < i) {
            dot.classList.add('dot-transparent');
        } else {
            dot.classList.add('dot');
        }

        scaleCntr.appendChild(dot);
    }

    cntr.appendChild(scaleCntr);

    return cntr;
};
