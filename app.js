let darkEnergy = 0
let clickCollection = 0
let autoCollection = 0

let clickUpgrades = [
  {
    name: 'pickaxe',
    price: 10,
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
  clickUpgrades.forEach((item) => clickCollection = (item.quantity *= item.multiplier))
  darkEnergy += clickCollection
  Update()
}
function autoHarvest() {
  automaticUpgrades.forEach((item) => autoCollection = (item.multiplier *= item.quantity))
  console.log(autoCollection)
  Update()
}
function Update() {
  darkEnergy += autoCollection
  const darkEnergyEle = document.getElementById('totalDarkEnergy')
  const pickaxeEle = document.getElementById('currentPickaxes')
  const clickCollectionEle = document.getElementById('currentClick')
  const autoCollectionEle = document.getElementById('currentAuto')

  darkEnergyEle.innerHTML = `Dark Energy = ${darkEnergy}`
  pickaxeEle.innerHTML = ` You have ${clickUpgrades[0].quantity} Pickaxes`
  clickCollectionEle.innerHTML = `${clickCollection}`
  autoCollectionEle.innerHTML = `${autoCollection}`
}
function buyPickaxe(UpgradeType, Clicktype) {
  if (UpgradeType == 'clickUpgrades') {
    const upgrade = clickUpgrades
    const upgradeFound = upgrade.find((upgrade) => upgrade.name == Clicktype)

    if (darkEnergy >= upgradeFound.price) {
      darkEnergy -= upgradeFound.price
      upgradeFound.quantity++
      console.log('purchased')
    }
    else (console.log('Not Enough Money'))
    Update()
  }
  if (UpgradeType == 'automaticUpgrades') {
    const upgrade = automaticUpgrades
    const upgradeFound = upgrade.find((upgrade) => upgrade.name == Clicktype)

    if (darkEnergy >= upgradeFound.price) {
      darkEnergy -= upgradeFound.price
      upgradeFound.quantity++
      console.log('purchased')
    }
    else (console.log('Not Enough Money'))
    Update()
  }
}
Update()
setInterval(autoHarvest, 3000)