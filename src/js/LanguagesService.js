import languages from '../data/languages.json';
import { createKnowledgeScaleElement } from './KnowledgeScaleService';

class LanguagesService {

    constructor() {
        this.createInterestsElement();
    }
    
    createInterestsElement() {
        const languagesElement = document.getElementById("languages-id");

        const headerElement = document.createElement('div');
        headerElement.classList.add('section-header');
        headerElement.innerHTML = languages.sectionName;
        languagesElement.appendChild(headerElement);

        Object.entries(languages.sectionData)
            .forEach(([key, value]) => {
                const cntr = createKnowledgeScaleElement(key, value);
                languagesElement.appendChild(cntr);
            });
    }

}

export const languagesService = new LanguagesService();
