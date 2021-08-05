//event listeners for all three UI buttons
const usersBtn = document.getElementById('users').addEventListener('click', getUsers);
const commentsBtn = document.getElementById('comments').addEventListener('click', getComments);
const photosBtn = document.getElementById('photos').addEventListener('click', getPhotos);
let outputData = document.getElementById('output');
document.querySelector('.card').style.marginTop = '150px';


//function for users button event listener
async function getUsers(e) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);

   let output = '';

  data.forEach(function(dataObject) {
    console.log(dataObject.username)
    output += `<li class=''>
    <table class="table">
      <tr>
        <td>
          <p class="font-weight-bold text-white">Client ID: <span class="font-weight-normal text-dark">${dataObject.id}</span>
          </p>
        </td>
        <td>
          <p class="font-weight-bold text-white">Name: <span class="font-weight-normal text-dark">${dataObject.name}</span>
          </p>
          <p class="font-weight-bold text-white">Phone: <span class="font-weight-normal text-dark">${dataObject.phone}</span>
        </p>
        </td>
        <td>
          <p class="font-weight-bold text-white">Username: <span class="font-weight-normal text-dark">${dataObject.username}</span>
          </p>
          <p class="font-weight-bold text-white">Company: <span class="font-weight-normal text-dark">${dataObject.company.name}</span>
          </p>
        </td> 
        <td>
          <p class="font-weight-bold text-white">Email: <span class="font-weight-normal text-dark">${dataObject.email}</span>
          </p>
          <p class="font-weight-bold text-white">Website: <span class="font-weight-normal text-dark">${dataObject.website}</span>
          </p>
        </td>
      </tr>
    </table>
    </li>
                `;
  });
  
  outputData.innerHTML = output;
  document.querySelector('.users').hidden = false;
  document.querySelector('.photos').hidden = true;
  document.querySelector('.card').style.marginTop = '0';
}


//function for comments button event listener
async function getComments(e) {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await response.json();
  console.log(data);

  const userComments = data.map(function(dataObject) {
    return dataObject;
  });

  console.log(userComments);


  let output = '';

  userComments.forEach(function(dataObject) {
    console.log(dataObject)
    output += `<li class=''>
    <table class="table">
    <tr>
      <td>
        <p class="font-weight-bold text-white">Name: <span class="font-weight-normal text-dark">${dataObject.name}</span>
        </p>
        <p class="font-weight-bold text-white">Email: <span class="font-weight-normal text-dark">${dataObject.email}</span>
        </p>
        <p class="font-weight-bold text-white">Comment: <span class="font-weight-normal text-dark">${dataObject.body}</span>
        </p>
      </td>
    </tr>
  </table></li>`;
  });

  outputData.innerHTML = output;
  document.querySelector('.users').hidden = false;
  document.querySelector('.photos').hidden = true;
  document.querySelector('.card').style.marginTop = '0';
 }

//function for photos button event listener
 function getPhotos(){
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      let imageUrl = data.message;
      outputData.innerHTML = `<img class='mx-auto' src='${imageUrl}' style='display:block; width:100%'>`;
      document.querySelector('.users').hidden = true;
      document.querySelector('.photos').hidden = false;
      document.querySelector('.card').style.marginTop = '25px';
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
}