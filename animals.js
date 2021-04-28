const junieta = document.querySelector('.jumboImgJu')
const billy = document.querySelector('.jumboImgBi')
const profileA = document.querySelector('.cardA')
const profileB = document.querySelector('.cardB')
const buttonBlue = document.querySelector('.buttonA')
const buttonPink = document.querySelector('.buttonB')
const close = document.querySelector('.closeA')
const close2 = document.querySelector('.closeB')


function load(){
    junieta.classList.add('activeJunieta')
    billy.classList.add('activeBilly')
}


buttonBlue.addEventListener('click', () =>{
    profileA.classList.add('profileStyle')

})
buttonPink.addEventListener('click', () =>{
    profileB.classList.add('profileStyle')

})

close.addEventListener('click', () =>{
    profileA.classList.remove('profileStyle')
})
close2.addEventListener('click', () =>{
    profileB.classList.remove('profileStyle')
})

window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 23 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 22);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
