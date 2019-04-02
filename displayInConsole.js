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

function displayResults(responseJson) {
  console.log(responseJson);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const numEntered = $('input').val();
    //alert(numEntered);
    getDogImage(numEntered);
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});