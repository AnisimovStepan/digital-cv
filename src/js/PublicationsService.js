require('../scss/workExperience.scss');
import publications from '../data/publications.json';
import { createHeaderSectionWithLineElement } from './HeaderSectionService';

class PublicationsService {

    constructor() {
        this.createPublicationsElement();
    }
    
    createPublicationsElement() {
        const publicationsElement = document.getElementById("publications-id");

        const headerElement = createHeaderSectionWithLineElement(publications.sectionName);
        publicationsElement.appendChild(headerElement);

        publications.sectionData.forEach((pubItem) => {

                const dotCntr = document.createElement('div');
                dotCntr.classList.add('pb');
                dotCntr.style.display = 'flex';

                const blackDot = document.createElement('div');
                blackDot.classList.add('black-dot');
                dotCntr.appendChild(blackDot);

                const pubItemCntr = document.createElement('div');

                const pubItemUrl = document.createElement('a');
                pubItemUrl.innerHTML = pubItem.url;
                pubItemUrl.href = pubItem.url;
                pubItemCntr.appendChild(pubItemUrl);

                const pubItemText = document.createElement('div');
                pubItemText.innerHTML = pubItem.text;
                pubItemCntr.appendChild(pubItemText);

                dotCntr.appendChild(pubItemCntr);        
                publicationsElement.appendChild(dotCntr);
            });
    }

}

export const publicationsService = new PublicationsService();
