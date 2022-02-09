`use strict`

import * as DOM from './carDOM.js';

//Read
const get = () => {
    axios.get(`http://localhost:8080/car/read/${DOM.vehicleInput.value.toString()}`)
      .then((response) => {
        DOM.singleOutput.innerHTML = JSON.stringify(response.data)
      }).catch((err) => {
        console.log(err);
      });
  }

DOM.buttonSearch.onclick = () => get();

  
//Post
const post = () => {
    axios.post(`http://localhost:8080/car/create`,{name : DOM.nameInput.value, colour : DOM.colourInput.value, make : DOM.makeInput.value, model : DOM.modelInput.value, doors: DOM.doorsInput.value,})
      .then((response) => {
        console.log(response);
        get();
      }).catch((err) => {
        console.log(err);
      });
  }

DOM.buttonCreate.onclick = () => post();
  



//Update
  const updateColour = () => { 
    axios.post(`http://localhost:8080/car/update/${DOM.idInput.value.toString()}`, {colour:DOM.colourUpdate.value.toString()})
      .then((response) => {
       console.log(response);
       get();
      }).catch((err) => {
        console.log(err);
      });
  }

  
  DOM.buttonUpdate.onclick = () => updateColour();


//Delete by ID
  const del = () => { 
    axios.delete(`https://localhost8080/car/delete/${DOM.idDelete.value.toString()}`)
      .then((response) => {
       console.log(response);
       get();
      }).catch((err) => {
        console.log(err);
      });
  }
  
  DOM.buttonDelete.onclick = () => del();