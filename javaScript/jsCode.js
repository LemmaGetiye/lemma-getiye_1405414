'use strict'

const closer = document.querySelector('#closer');
const header = document.querySelector('#_Header');
const dropMenu = document.querySelector('.drop-menu');
const drop = document.querySelector('#drop');
const dropContent = document.querySelector('.drop-txt');
const prime_paragraph = document.querySelector('#prime-paragraph');
const firstParagraph = prime_paragraph.textContent;
const highSchool = document.querySelector('#highSchool');
const secondParagraph = highSchool.textContent;
const university = document.querySelector('#university');
const thirdParagraph = university.textContent;
const prev_button = document.querySelector('.left-btn');
const next_button = document.querySelector('.right-btn');
const primeHeader = document.querySelector('#prime-header');
const header_first = primeHeader.textContent;
const highSchoolTitle = document.querySelector('#highSchoolTitle');
const header_second = highSchoolTitle.textContent;
const universityTitle = document.querySelector('#university-title');
const header_third = universityTitle.textContent;
const about = document.querySelector('#About');
const bio = document.querySelector('#Bio');
const education = document.querySelector('#Education');
const aboutMySelf = document.querySelector('.about-myself');
const theme = document.querySelector('#theme');
const footer = document.querySelector('.footer');
const pppp = document.querySelector('.bio-paragraph');
const immm = document.querySelector('#hacK');
const personalInfoPara = document.querySelector('#personal-info-para');
const imgContainer = document.querySelector('.img-contaioner');
const socialMedia = document.querySelectorAll('.social_media');
const leftSide = document.querySelector('.left-side');
const rightSide = document.querySelector('.right-side');
const upArrow = document.querySelector('.up-arrow');
const themePicker = document.querySelector('.theme-picker');
drop.addEventListener('click',function(){
    dropMenu.style.display = 'block';
    aboutMySelf.style.marginTop = "14rem";
})
closer.addEventListener('click',function() {
    dropMenu.style.display = 'none';
    aboutMySelf.style.marginTop = "2rem";
})

let countClick = 0;
theme.addEventListener('click',function() {
    if(countClick %2 === 0){
    console.log('btn clicked');
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    footer.style.backgroundColor='#3b3b3b';
    upArrow.style.backgroundColor='#fff';
    upArrow.style.clipPath = 'circle()';
    aboutMySelf.style.backgroundColor='#8D6A61';
    prime_paragraph.style.backgroundColor = '#8D6A61';
    leftSide.style.backgroundColor = '#8D6A61';
    rightSide.style.backgroundColor = '#8D6A61';
    pppp.style.backgroundColor = '#8D6A61';
    header.style.backgroundColor = '#3b3b3b';
    themePicker.src = "../icons/lightTheme.png";
    dropMenu.style.backgroundColor = "gray";
    dropContent.style.color = "white";
    }
    else {
        document.body.style.backgroundColor = '#c4dfe6';
        document.body.style.color = 'black';
        footer.style.backgroundColor='#414141';
        footer.style.color='whitesmoke';
        aboutMySelf.style.backgroundColor='#66a5ad';
        prime_paragraph.style.backgroundColor = '#66a5ad';//#a39f9f
        leftSide.style.backgroundColor = '#66a5ad';//#aaaaaa
        rightSide.style.backgroundColor = '#66a5ad';
        pppp.style.backgroundColor = '#66a5ad';//#a39f9f
        header.style.backgroundColor = '#181818';
        themePicker.src = '../icons/darkTheme.png';
        dropMenu.style.backgroundColor = "transparent";
        dropContent.style.color = "black";
    }
   countClick++;
})
let counter = 0;

function opacityHandler(counter) {
    counter === 2 ? next_button.style.opacity = 0.4 : next_button.style.opacity = 1;

    counter === 0 ? prev_button.style.opacity = 0.4 : prev_button.style.opacity = 1;

}
const changeNext = function(){
    if(counter + 1 <= 2)
       counter++;
    opacityHandler(counter);
    handleTextChangeLR(counter); 
    console.log(counter);
}
next_button.addEventListener('click',changeNext);

prev_button.addEventListener('click',function () {
    if(counter - 1 >= 0)
       counter--;
    
    opacityHandler(counter);
    handleTextChangeRL(counter);
    console.log(counter);
})
function handleTextChangeLR(counter) {
    counter === 1 ? prime_paragraph.textContent = secondParagraph:prime_paragraph.textContent = thirdParagraph;

    counter === 1 ? primeHeader.textContent = header_second:primeHeader.textContent = header_third;
}
function handleTextChangeRL(counter) {
    counter === 0 ? prime_paragraph.textContent = firstParagraph: prime_paragraph.textContent = secondParagraph;

    counter === 0 ? primeHeader.textContent = header_first: primeHeader.textContent = header_second;
}

window.addEventListener('scroll', function() {

let windowHeight = window.innerHeight;
let topPara = pppp.getBoundingClientRect().top;
let revPo = 150;
if(topPara <windowHeight - revPo)
    pppp.classList.add('R-l');
else
    pppp.classList.remove('R-l');


let topImg = immm.getBoundingClientRect().top; 
if(topImg <windowHeight - revPo)
    immm.classList.add('L-r');
else
    immm.classList.remove('L-r');

let toppersonalInfoPara = personalInfoPara.getBoundingClientRect().top;
if(toppersonalInfoPara +700 >windowHeight)
personalInfoPara.classList.add('shiftLR');
else
personalInfoPara.classList.remove('shiftLR');
let topImgCont = imgContainer.getBoundingClientRect().top;
if(topImgCont+1000 > windowHeight)
    imgContainer.classList.add('shiftImm');
else
    imgContainer.classList.remove('shiftImm');

});


