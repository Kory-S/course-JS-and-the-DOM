//--- ADD AN EVENT LISTENER ---

//My code:
/*
const header = document.querySelector('h1');

header.addEventListener('mouseenter', function () {
    const hoverHeading = header.childNodes[0];
    hoverHeading.nodeValue = "Build an AR App";
    console.log("entered");
});

header.addEventListener('mouseleave', function(){
    const noHoverHeading = header.childNodes[0];
    noHoverHeading.nodeValue = "Learn ARKit";
    console.log("left");
});
*/
//Solution code (Preferred as this makes more sense):

const header = document.querySelector('h1');
const originalText = header.textContent;
const updatedText = "Build an AR App";

header.addEventListener('mouseenter', function () {
    header.textContent = updatedText;
});

header.addEventListener('mouseleave', function (){
    header.textContent = originalText;
});

//--- REMOVE AN EVENT LISTENER ---
//My code:

const classHeroModule = document.querySelector('.hero__module');

function rmHeroModOnce() {
    classHeroModule.firstElementChild.remove();
    console.log("Removed firstElementChild");
    classHeroModule.removeEventListener('click', rmHeroModOnce);
    console.log(".removeEventListener");
};

classHeroModule.addEventListener('click', rmHeroModOnce);