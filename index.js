let fyght = document.getElementById('fyght');
let fyghtDesc = document.getElementById('fyghtDesc');
let tumble = document.getElementById('tumble');
let tumbleDesc = document.getElementById('tumbleDesc');
let beAsOne = document.getElementById('beAsOne');
let beAsOneDesc = document.getElementById('beAsOneDesc');
let yCommunity = document.getElementById('yCommunity');
let yCommunityDesc = document.getElementById('yCommunityDesc');
const fyghtDescWidth = fyghtDesc.offsetWidth +250;
const fyghtDescHeight = fyghtDesc.offsetHeight-30;
const tumbleDescWidth = tumbleDesc.offsetWidth +200;
const tumbleDescHeight = tumbleDesc.offsetHeight-20;
const beAsOneDescWidth = beAsOneDesc.offsetWidth +250;
const beAsOneDescHeight = beAsOneDesc.offsetHeight-150;
const yCommunityDescWidth = yCommunityDesc.offsetWidth +250;
const yCommunityDescHeight = yCommunityDesc.offsetHeight-250;
fyghtDesc.style.display = "none";
tumbleDesc.style.display = "none";
beAsOneDesc.style.display = "none";
yCommunityDesc.style.display = "none";
//##########################################################"""
scroll_arrow();

function scroll_arrow() {
    let articleArrow = document.getElementById("scrollToArticles");
    articleArrow.addEventListener("click", () => {scroll("#articles")});
    let articleBurger = document.getElementById("articlesBurger");
    articleBurger.addEventListener("click", () => {scroll("#articles")});
    let aproposArrow = document.getElementById("scrollToApropos");
    aproposArrow.addEventListener("click", () => {scroll("#apropos")});
    let aProposBurger = document.getElementById("aProposBurger");
    aProposBurger.addEventListener("click", () => {scroll("#apropos")});
    let contactArrow = document.getElementById("scrollToContact");
    contactArrow.addEventListener("click", () => {scroll("#contact")});
    let contactBurger = document.getElementById("contactBurger");
    contactBurger.addEventListener("click", () => {scroll("#contact")});
    let topArrow = document.getElementById("scrollToTop");
    topArrow.addEventListener("click", () => {scroll("#home")});
    let homeBurger = document.getElementById("homeBurger");
    homeBurger.addEventListener("click", () => {scroll("#home")});
}

function scroll(section) {
    TweenLite.to(window, 1.5, { scrollTo: section });
}

// ########################Articles##########################

let slides = document.getElementById('slidesContent');
let currentPage = 0;
let next = document.getElementById('nextSlide');
let prev = document.getElementById('prevSlide');
next.addEventListener("click", () => {
    if(currentPage< slides.childElementCount-1) {
        slides.children[currentPage].animate([
            {transform: "translateX(0px)"},
            {transform: "translateX(-80vw)"}
        ],
        {duration: 400});
        setTimeout(() => {
        slides.children[currentPage].style.display = "none";
        currentPage++;
        slides.children[currentPage].animate([
            {transform: "translateX(80vw)"},
            {transform: "translateX(0vw)"}
        ],
        {duration: 400})
        slides.children[currentPage].style.display = "flex";
        prev.style.opacity = 1; }, 400);
    }
    if (currentPage == slides.childElementCount-2){
        next.style.opacity = 0;
    }
})

prev.addEventListener("click", () => {
    next.style.opacity = 1;
    if(currentPage > 0) {
        slides.children[currentPage].animate([
            {transform: "translateX(0vw)"},
            {transform: "translateX(80vw)"}
        ],
        {duration: 400});
        setTimeout(() => {
        slides.children[currentPage].style.display = "none";
        currentPage--;
        slides.children[currentPage].animate([
            {transform: "translateX(-80vw)"},
            {transform: "translateX(0vw)"}
        ],
        {duration: 400} );
        slides.children[currentPage].style.display = "flex";
        if (currentPage == 0) {
            prev.style.opacity = 0;
            console.log(currentPage);
        }}, 400);
    } 
})

function Show(){
    divInfo = document.getElementsByClassName('viewMoreDiv');
    button = document.getElementsByClassName('viewMoreButton');
    if (divInfo[currentPage].style.display == 'none'){
        divInfo[currentPage].style.display = 'block';
        button[currentPage].value = 'View less'
    } else {
        divInfo[currentPage].style.display = 'none';
        button[currentPage].value = 'View more'
    }
}

// ########################A propos##########################

fyght.addEventListener("mouseover", () => {
    fyght.setAttribute("style",`width: ${fyghtDescWidth}px; height: ${fyghtDescHeight}px`);
    fyghtDesc.style.display = "block";
})
fyght.addEventListener("mouseout", () => {
    fyght.setAttribute("style",`width: 20vw; height: 5vw`);
    fyghtDesc.style.display = "none";
})

tumble.addEventListener("mouseover", () => {
    tumble.setAttribute("style",`width: ${tumbleDescWidth}px; height: ${tumbleDescHeight}px`);
    tumbleDesc.style.display = "block";
})
tumble.addEventListener("mouseout", () => {
    tumble.setAttribute("style",`width: 20vw; height: 5vw`);
    tumbleDesc.style.display = "none";
})

beAsOne.addEventListener("mouseover", () => {
    beAsOne.setAttribute("style",`width: ${beAsOneDescWidth}px; height: ${beAsOneDescHeight}px`);
    beAsOneDesc.style.display = "block";
})
beAsOne.addEventListener("mouseout", () => {
    beAsOne.setAttribute("style",`width: 20vw; height: 5vw`);
    beAsOneDesc.style.display = "none";
})

yCommunity.addEventListener("mouseover", () => {
    yCommunity.setAttribute("style",`width: ${yCommunityDescWidth}px; height: ${yCommunityDescHeight}px`);
    yCommunityDesc.style.display = "block";
})
yCommunity.addEventListener("mouseout", () => {
    yCommunity.setAttribute("style",`width: 20vw; height: 5vw`);
    yCommunityDesc.style.display = "none";
})



// #fyghtDesc {
//     scale: 0;
// }

// #fyght:hover #fyghtDesc{
//     animation: 1s projectAnimHover forwards;
// }

// #fyght:hover {
//     padding: 1vw;
//     height: 10vw;
//     width: calc(fyghtDesc-width);
//     transition: all 1s ease-in-out;
//     animation: 1s projectAnim ;
// }

// @keyframes projectAnimHover {
//     0% {
//         scale: 0;
//     }
//     100% {
//         scale: 1;
//     }
// }

// @keyframes projectAnim {
//     0% {
//         width: 20vw;
//         height: 5vw;
//     }
//     100% {
//         width: 70vw;
//         height: 10vw;
//     }
// }
