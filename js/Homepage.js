'use strict'

import * as DOM from './carDOM.js';

// search button function

const get = () => {
  axios.get(`http://localhost:8080/car/read/${DOM.vehicleInput.value.toString()}`)
    .then((response) => {
      DOM.singleOutput.innerHTML = JSON.stringify(response.data)
    }).catch((err) => {
      console.log(err);
    });
}

DOM.buttonSearch.onclick = () => get();



  