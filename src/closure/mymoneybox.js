function moneyBox(coins) {
  let saveCoins = 0;
  
  function countCoins(coins) {
    saveCoins += coins
    console.log(`MoneyBox: $${saveCoins}`)
  }
  return countCoins;
}

const myMoneyBox = moneyBox();

console.log('My Money Box:')
myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(15);

console.log('\nAna Money Box:')
const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(15);
