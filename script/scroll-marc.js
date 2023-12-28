const produtos_marc = document.querySelector("#prod-marc");
const nav = document.querySelector("header");
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#a_nav');
const whatsflut = document.querySelector(".btn-flut");

window.onscroll = () => {
    if(window.scrollY > 0){
        nav.dataset.active="true"
        whatsflut.dataset.active="true"
    }else{
        nav.dataset.active="false"
        whatsflut.dataset.active="false"
    };
    if(window.scrollY > 1050 &  window.scrollY < 1800){
        produtos_marc.dataset.active = "true"
    }else{
        produtos_marc.dataset.active = "false"
    };
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


// window.onscroll = () => {
    
//     if(window.scrollY > 0){
//         nav.dataset.active="true"
//     }else{
//         nav.dataset.active="false"
//     };
//     if(window.scrollY > 1050 &  window.scrollY < 1800){
//         produtos_marc.dataset.active = "true"
//     }else{
//         produtos_marc.dataset.active = "false"
//     }
// }

//console.log(window.scrollY)