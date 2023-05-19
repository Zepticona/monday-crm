
// this is wrapped in an `async` function
// you can use await throughout the function
const test = async () => {
  const res = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=B10 0AX,GB&appid=7874ba0c6f7b67ae68759d07c1f6222e`);
  const data = await res.json();
  console.log(data);
}
test();