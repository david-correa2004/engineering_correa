const produtos_mec = document.querySelector("#produtos");
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#a_nav');
const nav = document.querySelector("header");
const whatsflut = document.querySelector(".btn-flut");

window.onscroll = () => {
    if(window.scrollY > 0){
        nav.dataset.active="true"
        whatsflut.dataset.active="true"
    }else{
        nav.dataset.active="false"
        whatsflut.dataset.active="false"
    };
    if(window.scrollY > 1000 &  window.scrollY < 1850){
        produtos_mec.dataset.active = "true"
    }else{ 
        produtos_mec.dataset.active = "false"
    }
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top< offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('#a_nav[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
