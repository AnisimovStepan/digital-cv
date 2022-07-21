import personalData from '../data/personalData.json';

class PersonalDataService {

    constructor() {
        this.createPersonalDataElement();
    }
    
    createPersonalDataElement() {
        const personalDataElement = document.getElementById("personal-data-id");

        const headerElement = document.createElement('div');
        headerElement.classList.add('section-header');
        headerElement.innerHTML = personalData.sectionName;
        personalDataElement.appendChild(headerElement);

        Object.entries(personalData.sectionData)
            .forEach(([key, value]) => {
                const hdr = document.createElement('div');
                hdr.classList.add('text-header');
                hdr.innerHTML = key;
                personalDataElement.appendChild(hdr);
                                
                if (key == "LinkedIn") {
                    const vl = document.createElement('a')
                    vl.classList.add('pb');
                    vl.innerHTML = value;
                    vl.href = value;
                    personalDataElement.appendChild(vl);
                } else {
                    const vl = document.createElement('div')
                    vl.classList.add('pb');
                    vl.innerHTML = value;
                    personalDataElement.appendChild(vl);
                }
            });
    }

}

export const personalDataService = new PersonalDataService();
