require('../scss/workExperience.scss');
import workExperience from '../data/workExperience.json';
import { createHeaderSectionWithLineElement, createTimeHeaderElement } from './HeaderSectionService';

class WorkExperienceService {

    #parantElement = null;

    constructor() {
        this.createWorkExperienceElement();
    }
    
    createWorkExperienceElement() {
        this.#parantElement = document.getElementById("work-experience-id");

        const headerElement = createHeaderSectionWithLineElement(workExperience.sectionName);
        this.#parantElement.appendChild(headerElement);

        const addTimeSection = this.addTimeSection.bind(this);
        Object.entries(workExperience.sectionData).forEach(addTimeSection);
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

    createInfoSection(info) {
        const cntr = document.createElement('div');
        cntr.classList.add('pl');
        cntr.style.paddingBottom = '24px';

        const position = document.createElement('div');
        position.classList.add('text-header');
        position.innerHTML = info.position;
        cntr.appendChild(position);
    
        const companyAndContry = document.createElement('div');
        companyAndContry.classList.add('text-italic');
        companyAndContry.classList.add('pb');
        companyAndContry.innerHTML = info.companyNameAndAddress;
        cntr.appendChild(companyAndContry);

        const projectNameElement = document.createElement('div');
        projectNameElement.classList.add('pb');

        Object.entries(info.projectName)
            .forEach(([header, text]) => {

                const projectNameHeader = document.createElement('span');
                projectNameHeader.classList.add('text-header');
                projectNameHeader.innerHTML = header + ': ';
                projectNameElement.appendChild(projectNameHeader);
        
                const projectNameText = document.createElement('span');
                projectNameText.innerHTML = text
                projectNameElement.appendChild(projectNameText);    
            });
    
        cntr.appendChild(projectNameElement);

        Object.entries(info.activities)
            .forEach(([header, text]) => {

                const activitiesHeader = document.createElement('div');
                activitiesHeader.classList.add('text-header');
                activitiesHeader.innerHTML = header + ':';
                cntr.appendChild(activitiesHeader);

                text.forEach((activity) => {
                    const dotCntr = document.createElement('div');
                    dotCntr.style.display = 'flex';

                    const blackDot = document.createElement('div');
                    blackDot.classList.add('black-dot');
                    dotCntr.appendChild(blackDot);

                    const activityElement = document.createElement('div');
                    activityElement.innerHTML = activity;
                    dotCntr.appendChild(activityElement);

                    cntr.appendChild(dotCntr);
                })
            });

        return cntr;
    }

}

export const workExperienceService = new WorkExperienceService();
