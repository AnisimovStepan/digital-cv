import languages from '../data/languages.json';
import { createKnowledgeScaleElement } from './KnowledgeScaleService.js';

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
                const cntr = document.createElement('div');
                cntr.classList.add('ks-container');

                const hdr = document.createElement('div');
                hdr.classList.add('text-header');
                hdr.innerHTML = key;
                cntr.appendChild(hdr);
                                
                createKnowledgeScaleElement(cntr, value);

                languagesElement.appendChild(cntr);
            });
    }

}

export const languagesService = new LanguagesService();
