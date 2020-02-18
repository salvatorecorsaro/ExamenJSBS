var listElement = document.querySelector("#profiles");

function fetchData(url, callback) {
  let request = new XMLHttpRequest();
  request.open('GET', url);
  request.responseType = 'json';
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      callback(request.response);
    }
  };
  request.send();
}

function showItems(response) {
  for (let i = 0; i < response.results.length; i++) {
    listElement.innerHTML += `

        
       
        
        
        <div class="col-12 col-md-5 border border-secondary space">
        <div class="row">
          <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-4 center_h">
              <img class="card-img-top img-fluid" src="${response.results[i].picture.large}" alt="profile pic">
            </div>
            <div class="col-12 col-md-8">
              <h4 class="card-title">${response.results[i].name.title} ${response.results[i].name.first} ${response.results[i].name.last}</h4>
              <div class="row">
              <div class="container-fluid">
              <div class="row">
              <div class="col-12 col-md-5">              
              <p><i class="fas fa-phone"></i> ${response.results[i].phone} </p>
              </div>
              <div class="col-12 col-md-7">
              <p><i class="far fa-user"></i> ${response.results[i].login.username} </p>
              </div>
              </div>
              </div>
              </div>              
           <p><i class="far fa-envelope"></i> ${response.results[i].email}</p>
           <p><i class="fas fa-birthday-cake"></i> ${response.results[i].dob.date.substring(8, 10)}-${response.results[i].dob.date.substring(5, 7)}-${response.results[i].dob.date.substring(0, 4)}</p>
           <p><i class="fas fa-map"></i> ${response.results[i].location.street.number}, ${response.results[i].location.street.name}, ${response.results[i].location.city}, ${response.results[i].location.state}</p>
           </div>
          </div>
          </div>
        </div>
      </div>    
      <div class="col-0 col-md-1">
      </div>       
    `;
  }
}

fetchData('https://randomuser.me/api/?results=8', showItems);