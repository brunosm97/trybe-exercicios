const body = document.getElementById('container');
const header = document.getElementById('header-container');
const sectionsEmergency = document.getElementsByClassName('emergency-tasks')[0];
const sectionsNoEmergency = document.getElementsByClassName('no-emergency-tasks')[0];
const footer = document.querySelector('#footer-container');

const emergencyH3 = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyH3.length; index += 1) {
    emergencyH3[index].style.backgroundColor = 'rgb(165, 0, 243)';
    emergencyH3[index].style.color = 'white';
    emergencyH3[index].style.marginTop = '10px';
    emergencyH3[index].style.padding = '10px';
  }

const noEmergencyH3 = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyH3.length; index += 1) {
    noEmergencyH3[index].style.backgroundColor = 'black';    
    noEmergencyH3[index].style.color = 'white';
    noEmergencyH3[index].style.marginTop = '10px';
    noEmergencyH3[index].style.padding = '10px';
}

const divs = document.querySelectorAll('section div');
for (let index = 0; index < divs.length; index += 1) {
    divs[index].style.height = '198px';
}

body.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';
body.style.textAlign = 'center';
body.style.backgroundColor = 'white';
body.style.margin = '0';

header.style.color = 'white';
header.style.padding = '20px';
header.style.backgroundColor = 'rgb(0, 176, 105)';

sectionsEmergency.style.display = 'inline-block';
sectionsEmergency.style.height = '400px';
sectionsEmergency.style.margin = '56px 0';
sectionsEmergency.style.width = '400px';
sectionsEmergency.style.backgroundColor = 'orange';

sectionsNoEmergency.style.backgroundColor = 'yellow';
sectionsNoEmergency.style.display = 'inline-block';
sectionsNoEmergency.style.width = '400px';
sectionsNoEmergency.style.height = '400px';

footer.style.backgroundColor = 'rgb(0, 176, 105)';
footer.style.color = 'white';
footer.style.fontWeight = '700';
footer.style.padding = '15px';
footer.style.textAlign = 'center';
footer.style.marginTop = 'auto';
