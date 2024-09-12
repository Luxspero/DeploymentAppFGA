//chack aritmatika
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function devide(a, b) {
  if (b == 0) {
    throw new Error("b cannot be 0");
  }
  return a / b;
}

//check function
function isNameValid(name) {
  return /^[a-zA-Z]+$/.test(name);
}

//check REST API
function getAPI(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.error("Error:", error));
}
