'use strict'

import * as DOM from './Homepagedom.js';

// search button function

const get = () => {
  axios.get(`http://localhost:8080/car/read/${DOM.inputV.value.toString()}`)
    .then((response) => {
      DOM.outputV.innerHTML = JSON.stringify(response.data)
    }).catch((err) => {
      console.log(err);
    });
}

DOM.buttonV.onclick = () => get();

const get = () => {
  axios.get(`http://localhost:8080/car/read/${DOM.inputG.value.toString()}`)
    .then((response) => {
      DOM.outputG.innerHTML = JSON.stringify(response.data)
    }).catch((err) => {
      console.log(err);
    });
}

DOM.buttonG.onclick = () => get();



  