document.addEventListener('DOMContentLoaded', () => {

    const text1 = document.querySelector('.proactive-description1');
    const text2 = document.querySelector('.proactive-description2');
    const text3 = document.querySelector('.proactive-description3');
    const text4 = document.querySelector('.proactive-description4');
    const text5 = document.querySelector('.proactive-description5');

    const text = "Stephanie is an innovative high school student dedicated to transforming limitations into possibilities — one project at a time.";
let index = 0;
const speed = 20;

const element = document.querySelector(".about-paragraph");

function typeWriter() {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
    if (text1) {
        text1.addEventListener('mouseover', () => {
            text1.innerText = 'View Project-------                                                                 ';
        });

        text1.addEventListener('mouseout', () => {
            text1.innerText = 'A productivity app designed to help users manage their time and tasks effectively.';
        });
    }

    if (text2) {
        text2.addEventListener('mouseover', () => {
            text2.innerText = 'View Project -------                                                                  ';
        });

        text2.addEventListener('mouseout', () => {
            text2.innerText = 'An original invention that uses solar-power to heat up water for household appliances.';
        });
    }

    if (text3) {
        text3.addEventListener('mouseover', () => {
            text3.innerText = 'View Project -------                                           ';
        });

        text3.addEventListener('mouseout', () => {
            text3.innerText = 'Comprehensive university application guide for Canadian students.';
        });
    }

    if (text4) {
        text4.addEventListener('mouseover', () => {
            text4.innerText = 'View Project                                              -------';
        });

        text4.addEventListener('mouseout', () => {
            text4.innerText = 'Comprehensive university application guide for Canadian students.';
        });
    }

    if (text5) {
        text5.addEventListener('mouseover', () => {
            text5.innerText = 'View Project                                                                                       -------';
        });

        text5.addEventListener('mouseout', () => {
            text5.innerText = 'Built a fully functional robot and wrote a comprehensive document for the 2025-2026 push back competition.';
        });
    }

    
});

