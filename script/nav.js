const openBtn = document.querySelector('#menu__btn');
const closeBtn = document.querySelector('#close__btn');
const sidebarNav = document.querySelector("#sidebar__nav");
const lis = document.querySelectorAll("#sidebar__nav ul li");

lis.forEach(li => {
    li.onclick = () => {
        sidebarNav.dataset.active = "false";
    }
})

openBtn.onclick = () => {
    sidebarNav.dataset.active = "true";
}

closeBtn.onclick = () => {
    sidebarNav.dataset.active = "false";
}

/*scroll*/

/*flip*/
const flips = document.querySelectorAll('.flip-container');

flips.forEach(flip => {

    flip.onclick = () => {

        flips.forEach(div => div.dataset.active = "false");

        if (flip.dataset.active === 'false') {

            flip.dataset.active = 'true';

        } else {

            flip.dataset.active = 'false';
            
        }
    }
})



//scroll active

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active')
            });
        };
    });
};