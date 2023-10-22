let increment = 1;

for (let i = 1; i <= 10; i += increment) {
  console.log(i);
  show.innerHTML += `<p>${i}</p>`
}
let increse = 2;
for (let i = 2; i <= 10; i += increse) {
  console.log(i);
  show.innerHTML += `<p style="color:red">${i}</p>`

}

let divisided = 1
for (let i = 1; i <= 20; i += divisided) {
  console.log(i);
  show.innerHTML += `<p style="color:lime">${i}</p>`
  if (i % 3 === 0) {
    console.log(`${i} is divisible by three`);
    show.innerHTML += `<p style="color:blue">${i} is divisible by three</p>`
  }
}




