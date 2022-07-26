import profile from '../data/profile.json';
import { createHeaderSectionWithLineElement } from './HeaderSectionService';

class ProfileService {

    constructor() {
        this.createProfileElement();
    }
    
    createProfileElement() {
        const profileElement = document.getElementById("profile-id");

        const headerElement = createHeaderSectionWithLineElement(profile.sectionName);
        profileElement.appendChild(headerElement);

        const vl = document.createElement('div')
        vl.innerHTML = profile.sectionData.text;
        vl.style.textAlign = "justify";
        profileElement.appendChild(vl);
    }

}

export const profileService = new ProfileService();
