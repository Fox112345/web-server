
const weatherForm = document.querySelector('form');
let output = document.querySelector('h2');
const input = document.querySelector('input');

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    output.innerHTML = 'Loading...'
    fetch(`http://localhost:3000/weather/?address=${input.value}`)
    .then((res)=>{
            res.json().then((data) => {
                if (data.error){
                    output.innerHTML = `${data.error}`;
                } else {
                    output.innerHTML = `${data.point.location}, ${data.data}`
                } 
            })
        },
        error => {
            output.innerHTML = error
    });
});

