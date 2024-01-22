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

let test=8;

let call = (address) => {
  let url = 'http://localhost:3000/weather?location=' + address;
  fetch(url).then((response) => {
    response.json().then((data) => {

      const { error, location, forecstData, sender } = data;

      if (error) {
        console.log(error);
        return;
      } else {
        console.log({
          address:address,
          location: location,
          forecstData: forecstData,
          sender: sender,
        });
      }
    });
  });
};

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const location = search.value;

  call(location);

  console.log(location);
});
