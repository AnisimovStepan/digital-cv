import interests from '../data/interests.json';

class InterestsService {

    constructor() {
        this.createInterestsElement();
    }
    
    createInterestsElement() {
        const interestsElement = document.getElementById("interests-id");

        const headerElement = document.createElement('div');
        headerElement.classList.add('section-header');
        headerElement.innerHTML = interests.sectionName;
        interestsElement.appendChild(headerElement);

        const vl = document.createElement('div')
        vl.innerHTML = interests.sectionData.text;
        interestsElement.appendChild(vl);
    }

}

export const interestsService = new InterestsService();
