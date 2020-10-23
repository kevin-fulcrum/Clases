https://pokeapi.co/api/v2/pokemon/ditto

//una funcion que haga un request y retorne la data utilizando async/await
//una funcion que haga un request y retorne la data utilizando promesas
async function getPikachu() {
    try { 
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        const dataPokemon = await response.json();

        console.log(dataPokemon)
    }catch(error) {
        // handle error in catch
        console.error(error)
    }
}

getPikachu();


function getUsers(onSuccess) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Handle resolve & reject in the asynchronous
            if(onSuccess) {
                resolve('https://pokeapi.co/api/v2/pokemon/pikachu')
                resolve.json();
            } else {
                reject('Failed to fetch data!')
            }
        } , 1000)
    })
}

function get(url) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      var req = new XMLHttpRequest();
      req.open('GET', url);
  
      req.onload = function() {
        // This is called even on 404 etc
        // so check the status
        if (req.status == 200) {
          // Resolve the promise with the response text
          resolve(req.response);
        }
        else {
          // Otherwise reject with the status text
          // which will hopefully be a meaningful error
          reject(Error(req.statusText));
        }
      };
  
      // Handle network errors
      req.onerror = function() {
        reject(Error("Network Error"));
      };
  
      // Make the request
      req.send();
    });
  }
  
  get('https://pokeapi.co/api/v2/pokemon/pikachu').then(function(response) {
    console.log("Success!", response);
    var datadiv = document.getElementById("data");
      datadiv.innerHTML = response;
  }, function(error) {
  
  });
  
  get('https://pokeapi.co/api/v2/pokemon/pikachu').then(function(response) {
  
  }, function(error) {
    console.error("Failed!", error);
    var errordiv = document.getElementById("error");
      errordiv.innerHTML = error;  
  })