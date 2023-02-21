// USING Promises

const joke = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

const generateJokes = ()=>{
     const setHeader ={
        headers: {
            Accept : "application/json"
        }
     }

    fetch('https://icanhazdadjoke.com/', setHeader)
    .then((result) => result.json())
    .then((data)=> {
        joke.innerHTML = data.joke;
    }).catch((err) => console.log(err));
}

jokeBtn.addEventListener('click', generateJokes);
generateJokes();    