console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Bad Response");
    } else {
      const starWarsData = await response.json();
      starWarsData.results.forEach((character) => {
        console.log(character);
      });
    }
  } catch (error) {
    console.error("An Error occurred");
  }
}

fetchData();
