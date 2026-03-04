//your JS code here. If required.

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

function removeArticle(name) {
  let words = name.split(" ");

  if (words[0] === "A" || words[0] === "An" || words[0] === "The") {
    words.shift();
  }

  return words.join(" ");
}

bands.sort(function(a, b) {
  let bandA = removeArticle(a).toLowerCase();
  let bandB = removeArticle(b).toLowerCase();

  if (bandA > bandB) {
    return 1;
  } else if (bandA < bandB) {
    return -1;
  } else {
    return 0;
  }
});

const ul = document.getElementById("band");

for (let i = 0; i < bands.length; i++) {
  let li = document.createElement("li");
  li.textContent = bands[i];
  ul.appendChild(li);
}