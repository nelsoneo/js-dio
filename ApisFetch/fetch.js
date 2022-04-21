/*
    Consumindo APIs
*/

fetch(url, options)
  .then((response) => response.json())
  .then((json) => console.log(json));
//retorna uma promises

fetch("http://endereco-api.com", {
  method: "GET",
  cache: "no-cache",
})
  .then((response) => response.json())
  .then((json = console.log(json)));

fetch("http:endereco-api.com", {
  method: "POST",
  cache: "no-cache",
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((json) => console.log(json));
