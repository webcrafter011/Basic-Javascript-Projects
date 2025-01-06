// https://api.chucknorris.io/jokes/random

async function getJoke() {
  let joke = await fetch("https://api.chucknorris.io/jokes/random");

  try {
    if (!joke.ok) {
      throw new Error("Invalid resonse from server");
    }

    let data = await joke.json();

    const jokeContent = data.value;
    const displayJoke = document.getElementsByClassName("joke")[0];
    displayJoke.textContent = jokeContent;
    displayJoke.style.display = "block";

  } catch (error) {
    console.error(error);
  }
}
