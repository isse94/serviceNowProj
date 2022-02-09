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
  const update = () => { 
    axios.put(`http://localhost:8080/car/update/${DOM.idInput.value}`, {name : DOM.nameUpdate.value,colour : DOM.colourUpdate.value,make : DOM.makeUpdate.value,model : DOM.modelUpdate.value,doors : DOM.doorsUpdate.value})
  .then((response) => {
    console.log(response);
    get();
    DOM.nameUpdate.value = "";
    DOM.colourUpdate.value = "";
    DOM.makeUpdate.value = "";
    DOM.modelUpdate.value = "";
    DOM.doorsUpdate.value = "";
    DOM.idInput.value = "";
  }).catch((err) => {
    console.log(err);
  });
}

  DOM.buttonUpdate.onclick = () => update();


//Delete by ID
  const delCar = () => { 
    axios.delete(`http://localhost:8080/car/delete/${DOM.idDelete.value}`)
    .then((response) => {
      console.log(response);
      DOM.idDelete.value = "";
      get();
    }).catch((err) => {
      console.log(err);
    });

}
  
  DOM.buttonDelete.onclick = () => delCar();

