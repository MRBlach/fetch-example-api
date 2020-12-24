//event listeners for all three UI buttons
const usersBtn = document.getElementById('users').addEventListener('click', getUsers);
const commentsBtn = document.getElementById('comments').addEventListener('click', getComments);
const photosBtn = document.getElementById('photos').addEventListener('click', getPhotos);
let outputData = document.getElementById('output');
document.querySelector('.container').style.marginTop = '150px';


//function for users button event listener
async function getUsers(e) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);

   let output = '';

  data.forEach(function(dataObject) {
    console.log(dataObject.username)
    output += `<li class='p-2'>${dataObject.username}</li>`;
  });
  
  outputData.innerHTML = output;
  document.querySelector('.users').hidden = false;
  document.querySelector('.photos').hidden = true;
  document.querySelector('.container').style.marginTop = '0';
}


//function for comments button event listener
async function getComments(e) {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await response.json();
  console.log(data);

  const userComments = data.map(function(dataObject) {
    return dataObject.body;
  });

  console.log(userComments);


  let output = '';

  userComments.forEach(function(comment) {
    console.log(comment)
    output += `<li class='p-2'>${comment}</li>`;
  });

  outputData.innerHTML = output;
  document.querySelector('.users').hidden = false;
  document.querySelector('.photos').hidden = true;
  document.querySelector('.container').style.marginTop = '0';
 }

//function for photos button event listener
// function getPhotos(){
//   fetch('https://aws.random.cat/meow')
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//       let imageUrl = data.file;
//       output.innerHTML = `<img src=${imageUrl}>`;
//     })
//     .catch((error) => {
//       console.log(error);
//       alert(error);
//     });
// }

 function getPhotos(){
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      let imageUrl = data.message;
      outputData.innerHTML = `<img class='mx-auto' src='${imageUrl}' style='display:block; width:100%'>`;
      document.querySelector('.users').hidden = true;
      document.querySelector('.photos').hidden = false;
      document.querySelector('.container').style.marginTop = '25px';
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
}

// function getPhotos(){
//   fetch('https://jsonplaceholder.typicode.com/photos/5')
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//       let imageUrl = data.url;
//       output.innerHTML = `<img src=${imageUrl}>`;
//     })
//     .catch((error) => {
//       console.log(error);
//       alert(error);
//     });
// }

// function getPhotos(){
//   fetch('https://picsum.photos/200')
//     .then(response => response)
//     .then((data) => {
//       console.log(data);
//       let imageUrl = data.url;
//       output.innerHTML = `<img src=${imageUrl}>`;
//     })
//     .catch((error) => {
//       console.log(error);
//       //alert(error);
//     })
    
// }


//https://aws.random.cat/meow  data.file
//https://dog.ceo/api/breeds/image/random  data.message

//https://jsonplaceholder.typicode.com/photos  
//        data.url for single photo,
//        some sort of forEach loop for all photos

//https://picsum.photos/200  data.url