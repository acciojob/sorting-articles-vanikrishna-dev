const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

function strip(name) {
  return name.replace(/^(a |an |the )/i, "").trim();
}

bands.sort(function(a, b) {
  return strip(a).localeCompare(strip(b));
});

const ul = document.getElementById("bands");

bands.forEach(function(band) {
  const li = document.createElement("li");
  li.textContent = bands;
  ul.appendChild(li);
});