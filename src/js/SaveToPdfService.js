require('../scss/saveToPdf.scss');

import { jsPDF } from "jspdf";

class SaveToPdfService {

    constructor() {
        
        const saveButton = document.getElementById('save-to-pdf-id');

        const saveNameElement = document.createElement('div');
        saveNameElement.classList.add('name');
        saveNameElement.innerHTML = "PDF";
        saveButton.appendChild(saveNameElement);

        saveButton.addEventListener('click', this.onSavePdf.bind(this));
    }
    
    onSavePdf() {
        const site = window.document.getElementsByTagName('body')[0];
        const fileName = this.getFileName();
        const button = document.getElementById("save-to-pdf-id");
        
        var doc = new jsPDF('p', 'pt', [site.clientWidth, site.clientWidth * 1,4142]);


        button.style.display = 'none';
        doc.html(site, {
            
            callback: function(doc) {
                doc.save(fileName);
                button.style.display = 'flex';
            },

            specialElementHandlers: {
                '#save-to-pdf-id': function (element, renderer) {
                    return true;
                }
            }    
        });

    }   

    getFileName() {
        const cvName = document.getElementById('cv-id').innerHTML;
        const personName = document.getElementById('personal-data-id').children[2].innerHTML.replace(" ", "-");

        return `${personName}-${cvName}.pdf`;
    }

}

export const saveToPdfService = new SaveToPdfService();
