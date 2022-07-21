import cv from '../data/cv.json';
import cvFoto from '../img/cv-foto.jpg';

class CvService {

    constructor() {
        this.setCvType();
        this.createFotoElement();
    }

    setCvType() {
        const cvElement = document.getElementById("cv-id");
        cvElement.innerHTML = cv.sectionName;
    }
    
    createFotoElement() {
        const imageElement = document.createElement('img');
        imageElement.src = cvFoto;

        const cvFotoElement = document.getElementById("cv-foto-id");
        cvFotoElement.appendChild(imageElement);
    }
        
}

export const cvService = new CvService();
