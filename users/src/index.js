import faker from "faker";

let users = "";

for (let i = 0; i < 3; i++) {
const name = faker.commerce.productName();
  users += `<p>${name}</p>`;
}

document.querySelector('#users').innerHTML = users;