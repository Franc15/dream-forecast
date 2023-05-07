// Display the dream response
const interpreteBtn = document.getElementById('interpret');
const dreamResponse = document.getElementById('dreamResponse');

interpreteBtn.addEventListener('click', (e) => {

    e.preventDefault();

    // Show the dream response
    dreamResponse.classList.add('show');

});


// Parallax Effect
const moon = document.querySelector('.moon');
const leftCloud = document.querySelector('.cloud1');
const rightCloud = document.querySelector('.cloud2');

window.addEventListener('scroll', () => {

    if (window.scrollY > 100) {
        let value = window.scrollY;

        leftCloud.style.left = value * -1 + 'px';
        rightCloud.style.right = value * -1 + 'px';

        moon.classList.toggle('toLeft');
    }

})