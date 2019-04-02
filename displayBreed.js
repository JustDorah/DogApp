'use strict';

function getDogImage(breed) {

    //why is this made this way?
    const web = `https://dog.ceo/api/breed/${breed}/images/random`;

    fetch(web)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);

    //why didn't using an if with both work?

    // if(responseJson.status === 'Success'){
    $('.results-img').replaceWith(`<img src="${responseJson.message}"  class="results-img">`);
    $('.results').removeClass('hidden');
    $('.notFound').addClass('hidden2');
    //to make sure it stays hidden when the user re-enters correct info.
    // }

    if (responseJson.message === 'Breed not found') {
        $('.notFound').removeClass('hidden2');
        $('.results-img').addClass('hidden2');
    }
}

function watchForm() {
    $('.displayDogBreed').submit(event => {
        event.preventDefault();
        const breed = $('input').val();
        getDogImage(breed);
        console.log('breed entered is:' + breed);
    });
}

$(function () {
    $('.displayDogBreed').removeClass('hiddenBreed');
    $('.displayDogs').addClass('hidden');
    console.log('App loaded! Waiting for submit!');
    watchForm();
});