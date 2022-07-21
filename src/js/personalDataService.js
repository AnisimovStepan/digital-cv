import cvFoto from '../img/cv-foto.jpg';
import personalData from '../data/personalData.json';

class AboutMeService {

    constructor() {
        this.createFotoElement();
        this.createPersonalDataElement();
    }

    createFotoElement() {
        const imageElement = document.createElement('img');
        imageElement.src = cvFoto;

        const cvFotoElement = document.getElementById("cv-foto-id");
        cvFotoElement.appendChild(imageElement);
    }
    
    createPersonalDataElement() {
    }
    
}

export const aboutMeService = new AboutMeService();
