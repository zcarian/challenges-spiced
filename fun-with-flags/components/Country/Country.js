export function Country(props) {
  const countryElement = document.createElement("li");
  countryElement.className = "country";

  const img = document.createElement("img");
  img.src = `https://flagsapi.com/${props.code}/flat/64.png`; // I found working API and changed the link
  img.alt = `Flag of ${props.name}`;

  const name = document.createElement("p");
  name.textContent = props.name;

  countryElement.append(img, name);

  return countryElement;
}
