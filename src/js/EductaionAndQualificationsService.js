require('../scss/workExperience.scss');
import eductaionAndQualifications from '../data/eductaionAndQualifications.json';
import { createHeaderSectionWithLineElement, createTimeHeaderElement } from './HeaderSectionService';

class EductaionAndQualificationsService {

    #parantElement = null;

    constructor() {
        this.createEducationAndQualificationsElement();
    }
    
    createEducationAndQualificationsElement() {
        this.#parantElement = document.getElementById("education-and-qualifications-id");

        const headerElement = createHeaderSectionWithLineElement(eductaionAndQualifications.sectionName);
        this.#parantElement.appendChild(headerElement);

        const addTimeSection = this.addTimeSection.bind(this);
        Object.entries(eductaionAndQualifications.sectionData).forEach(addTimeSection);
    }

    addTimeSection([name, infos]) {
        const mainCntr = document.createElement('div');
        mainCntr.classList.add('we-container');

        const timeLine = document.createElement('div');
        timeLine.classList.add('time-line')
        mainCntr.appendChild(timeLine);
    
        const cntr = document.createElement('div');
        cntr.classList.add('we-wrapper-container');

        const timeHeader = createTimeHeaderElement(name);
        timeHeader.style.alignSelf = "flex-start";
        cntr.appendChild(timeHeader);

        cntr.appendChild(this.createInfoSection(infos));

        mainCntr.appendChild(cntr);

        this.#parantElement.appendChild(mainCntr);
    }

    createInfoSection(educationInfo) {
        const cntr = document.createElement('div');
        cntr.classList.add('pl');
        cntr.style.paddingBottom = '24px';

        const speciality = document.createElement('div');
        speciality.classList.add('text-header');
        speciality.innerHTML = educationInfo.speciality;
        cntr.appendChild(speciality);
    
        const universityName = document.createElement('div');
        universityName.classList.add('text-italic');
        universityName.classList.add('pb');
        universityName.innerHTML = educationInfo.universityName;
        cntr.appendChild(universityName);


        const createHeaderAndTextElement = ([header, text]) => {
            const internalCntr = document.createElement('div');
    
            const hdr = document.createElement('span');
            hdr.classList.add('text-header');
            hdr.innerHTML = header + ': ';
            internalCntr.appendChild(hdr);
    
            const textElement = document.createElement('span');
            textElement.innerHTML = text
            internalCntr.appendChild(textElement);    

            cntr.appendChild(internalCntr);
        };

        Object.entries(educationInfo.faculty).forEach(createHeaderAndTextElement);
        Object.entries(educationInfo.department).forEach(createHeaderAndTextElement);
        Object.entries(educationInfo.focus).forEach(createHeaderAndTextElement);
    
        return cntr;
    }

}

export const eductaionAndQualificationsService = new EductaionAndQualificationsService();
