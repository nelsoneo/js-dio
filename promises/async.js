async function resolverPromise() {
  const myPromises = new Primise((resolve, reject) => {
    window.setTimeout(() => {
      resolve(console.log("Resolvida"));
    }, 2000);
  });

  const resolved = await myPromises
    .then((result) => result + "passando pelo then")
    .then((result) => result + "e agora acabou")
    .catch((err) => console.log(err.message));
  return resolved;
}
