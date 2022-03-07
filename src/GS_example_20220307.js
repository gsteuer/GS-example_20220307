console.clear();
console.log("Hallo");
let max = prompt("Bitte Wert eingeben");
for (let i = 0; i <= max; i++) {
  console.log(i);
}
let a = [1, 4, 3, 7]; // Array
console.log("Array-Length: " + a.length);
for (let i in a) {
  console.log(a[i]);
}

let d = {
  vorname: "Gisbert",
  nachname: "Steuer",
  Strasse: "Im Holz 43",
  PLZ: "51427",
  Ort: "Bergisch Gladbach"
}; // dictionary

console.log(d.vorname + " " + d.nachname);
