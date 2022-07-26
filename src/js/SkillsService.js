import skills from '../data/skills.json';
import { createHeaderSectionWithLineElement } from './HeaderSectionService';
import { createKnowledgeScaleElement } from './KnowledgeScaleService';

class SkillsService {

    constructor() {
        this.createSkillsServiceElement();
    }
    
    createSkillsServiceElement() {
        const skillsElement = document.getElementById("skills-id");

        const headerElement = createHeaderSectionWithLineElement(skills.sectionName);
        skillsElement.appendChild(headerElement);

        const mainCntr = document.createElement('div');
        mainCntr.classList.add('skills-container');

        Object.entries(skills.sectionData)
            .forEach(([skillName, ratio]) => {
                const cntr = createKnowledgeScaleElement(skillName, ratio);
                cntr.classList.add("skill");
                mainCntr.appendChild(cntr);
            });

        skillsElement.appendChild(mainCntr);
    }

}

export const skillsService = new SkillsService();
