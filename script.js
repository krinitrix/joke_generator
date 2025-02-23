const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const getJoke = async () => {
    try {
        const res = await fetch("https://v2.jokeapi.dev/joke/Any?type=twopart");
        const data = await res.json();
        console.log(data);
        jokeElement.innerHTML = `${data.setup} <br><br> ${data.delivery}`;
    } catch (error) {
        jokeElement.innerHTML = "Error";
        
    }
};

jokeBtn.addEventListener("click", getJoke);
getJoke();
