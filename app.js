// import functions

// grab DOM elements

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state

const showButton = document.getElementById('btn');

const animal = document.getElementById ('animalDiv');

const showButton2 = document.getElementById('btn2');

const vg = document.getElementById ('vgDiv');


showButton.addEventListener('click', () => {

    animal.classList.remove('hidden');
});

showButton2.addEventListener('click', () => {

    vg.classList.remove('hidden');
});
