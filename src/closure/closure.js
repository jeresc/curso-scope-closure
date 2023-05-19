function greeting() {
  let username = 'Jeremias';

  function displayUserName() {
    return `Hello ${username}`
  }
  return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g())