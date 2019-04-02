'use strict';

function getDogImage(numEntered) {
  const web = 'https://dog.ceo/api/breeds/image/random';

  // console.log(`web is: ${web} and number entered is: ${numEntered}`);    

  if (numEntered > 1) {
    let i;

    for (i = 1; i <= numEntered; i++) {
      fetch(web)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson)).catch(error => alert('Something went wrong. Try again later.'));
    };
  } else {
    fetch(web)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson)).catch(error => alert('Something went wrong. Try again later.'));
  }
}

//   Explain please and what other ways?
function displayResults(responseJson) {
  console.log(responseJson);
  if (!Array.isArray(responseJson.message)) {
    responseJson.message = [responseJson.message]
  }
  responseJson.message.forEach(function (message) {
    $('.results ul').append(`<li><img src="${message}"/></li>`)
  });
  $('.results').removeClass('hidden');

}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const numEntered = $('form input').val();
    //   alert(numEntered);
    getDogImage(numEntered);
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});