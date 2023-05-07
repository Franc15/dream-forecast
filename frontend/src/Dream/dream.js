// Display the dream response
const interpreteBtn = document.getElementById('interpret');
const dreamResponse = document.getElementById('dreamResponse');

interpreteBtn.addEventListener('click', (e) =>{

    e.preventDefault();

    // Show the dream response
    dreamResponse.classList.add('show');

});