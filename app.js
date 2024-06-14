let darkEnergy = 0
let clickUpgrades = [
  {
    name: 'pickaxe',
    price: 100,
    quantity: 0,
    multiplier: 1
  }
];

let automaticUpgrades = [
  {
    name: 'rover',
    price: 600,
    quantity: 0,
    multiplier: 20
  }
];
function Harvest() {
  darkEnergy++
  Update()
}
function Update() {
  const darkEnergyEle = document.getElementById('totalDarkEnergy')
  darkEnergyEle.innerHTML = `${darkEnergy}`
}