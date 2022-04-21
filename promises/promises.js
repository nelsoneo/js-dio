/*
Primises tem 3 estados

1- Pending
2- Fulfilled
3- Rejected
*/

const myPromises = new Primise((resolve, reject) => {
  window.setTimeout(() => {
    resolve(console.log("Resolvida"));
  }, 2000);
});

await myPromises
.then((result) => result + "passando pelo then")
.then((result) => result + "e agora acabou")
.catch((err) => console.log(err.message));
