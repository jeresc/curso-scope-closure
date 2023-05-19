function greeting() {
  let userName = 'Jere'; // Function Scope
  console.log(userName);

  if (userName === 'Jere') {
    console.log(`Hello ${userName}!`)
  }
}

greeting();