require('../scss/headerSectioWithLine.scss');

const createHeaderSectionWithLineElement = (name) => {

    const cntr = document.createElement('div');
    cntr.classList.add('header-section-container');

    const hdr = document.createElement('div');
    hdr.classList.add('section-header');
    hdr.innerHTML = name;
    cntr.appendChild(hdr);

    const line = document.createElement('div');
    line.classList.add('line');
    line.classList.add('pl');
    cntr.appendChild(line);

    return cntr;
};

const createTimeHeaderElement = (name) => {
    const cntr = document.createElement('div');
    cntr.classList.add('header-section-container');
    cntr.classList.add('pb');

    const line = document.createElement('div');
    line.classList.add('line');
    line.style.paddingRight = '16px';
    cntr.appendChild(line);

    const header = document.createElement('div');
    header.style.width = "180px";
    header.innerHTML = name;
    cntr.appendChild(header);

    return cntr;
}

export { createHeaderSectionWithLineElement, createTimeHeaderElement }; 