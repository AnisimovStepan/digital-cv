import cv from '../data/cv.json';

class CvService {

    constructor() {
        this.setCvType();
    }

    setCvType() {
        const cvElement = document.getElementById("cv-id");
        cvElement.innerHTML = cv.sectionName;
    }
        
}

export const cvService = new CvService();
