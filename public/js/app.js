console.log('Client side javascript file is loaded!');

// let url="https://puzzle.mead.io/puzzle";
// fetch(url).then((response)=>{
//     response.json().then((data)=>{
//         console.log(data);
//     })
// });
// let url = `http://api.weatherstack.com/current?access_key=a37db8298a8ba9e8d33f9ea13ade0361&query=a435ttrera${33.572558},${-7.533141}`;

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

// messageOne.textContent = "From JavaScript";


// https://masmuscompany.onrender.com/weather?location=Avola%20Siracusa

// http://localhost:3000/weather?location=

let call = (address) => {
  let url = 'https://masmuscompany.onrender.com/weather?location=' + address;
  fetch(url).then((response) => {
    response.json().then((data) => {
      const { error, location, forecstData, sender, weatherData } = data;
      console.log(data);
      if (error) {
        messageOne.textContent = error;
        // console.log(error);
        return;
      } else {
        console.log(weatherData + 'ciao');

        messageOne.textContent = location;
        messageTwo.textContent = forecstData;

        console.log({
          address: address,
          //  location: location,
          //  forecstData: forecstData,
          //   sender: sender,
        });
      }
    });
  });
};

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const location = search.value;
  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';

  //console.log(location);

  call(location);
});
