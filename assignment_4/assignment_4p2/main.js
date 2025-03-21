const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageHolder = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"];
/* Declaring the alternative text for each image file */
const imageAlts = ["A close up image of a human eye", "Flowing sandstone similar to waves", "A close up of purple and white flowers", "Egyptian stone artwork and hieroglyphs", "A butterfly on a green leaf"];
/* Looping through images */
for (let i = 0; i<imageHolder.length; i++){
const newImage = document.createElement('img');
newImage.setAttribute('src', imageHolder[i]);
newImage.setAttribute('alt', imageAlts[i]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
});
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const buttonClassHold = btn.getAttribute('class');
    if (buttonClassHold == 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.50)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Dark';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});