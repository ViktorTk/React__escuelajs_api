export async function responseApi(endpoint) {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 1500)
  })
  let arrObj = await fetch(`https://api.escuelajs.co/api/v1/${endpoint}`);
  let dataArObj = await arrObj.json();

  console.log(dataArObj);

  // Вернём массив продуктов
  return dataArObj;
}