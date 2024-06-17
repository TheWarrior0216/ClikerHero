let darkEnergy = 0
let clickCollection = 0
let autoCollection = 0

let clickUpgrades = [
  {
    name: 'Soul Harvester',
    price: 50,
    quantity: 0,
    multiplier: 1
  },
  {
    name: 'Soul Searcher',
    price: 300,
    quantity: 0,
    multiplier: 5
  }
];

let automaticUpgrades = [
  {
    name: "Hades Glove",
    price: 600,
    quantity: 0,
    multiplier: 20
  },
  {
    name: "Hades Helm",
    price: 3000,
    quantity: 0,
    multiplier: 200
  }
];
function Harvest() {
  let total = 0
  darkEnergy++
  clickUpgrades.forEach((item) => total += (item.quantity * item.multiplier))
  console.log(total);
  clickCollection = total
  darkEnergy += clickCollection
  Update()
}
function autoHarvest() {
  let total = 0
  automaticUpgrades.forEach((item) => total += (item.multiplier * item.quantity))

  autoCollection = total
  darkEnergy += autoCollection
  Update()
}
function Update() {
  let total = 0
  clickUpgrades.forEach((item) => total += (item.quantity * item.multiplier))
  clickCollection = total
  total = 0
  automaticUpgrades.forEach((item) => total += (item.multiplier * item.quantity))

  autoCollection = total
  const darkEnergyEle = document.getElementById('totalDarkEnergy')
  const pickaxeEle = document.getElementById('currentHarvesters')
  const searchersEle = document.getElementById('currentSearchers')
  const clickCollectionEle = document.getElementById('currentClick')
  const HadesGloveEle = document.getElementById("Hades' Glove")
  const HadesHelmEle = document.getElementById("Hades' Helm")
  const autoCollectionEle = document.getElementById('currentAuto')

  const hMoneyEle = document.getElementById('hMoney')
  const sMoneyEle = document.getElementById('sMoney')
  const gMoneyEle = document.getElementById('gMoney')
  const haMoneyEle = document.getElementById('haMoney')

  darkEnergyEle.innerHTML = ` Dark Energy = ${darkEnergy}`
  pickaxeEle.innerHTML = ` You have ${clickUpgrades[0].quantity} Soul Harvesters 1/spc`
  searchersEle.innerHTML = ` You have ${clickUpgrades[1].quantity} Soul Searchers 5/spc`
  clickCollectionEle.innerHTML = `Siphon Per Click: ${clickCollection + 1}`
  HadesGloveEle.innerHTML = `You have ${automaticUpgrades[0].quantity} Hades Glove 20/sps`
  HadesHelmEle.innerHTML = `You have ${automaticUpgrades[1].quantity} Hades Helm 200/sps`
  autoCollectionEle.innerHTML = `Siphon Per Second: ${autoCollection}`

  hMoneyEle.innerHTML = `${clickUpgrades[0].price}`
  sMoneyEle.innerHTML = `${clickUpgrades[1].price}`
  gMoneyEle.innerHTML = `${automaticUpgrades[0].price}`
  haMoneyEle.innerHTML = `${automaticUpgrades[1].price}`
}
function buyUpgrade(UpgradeType, Clicktype) {
  if (UpgradeType == 'clickUpgrades') {
    const upgrade = clickUpgrades
    const upgradeFound = upgrade.find((upgrade) => upgrade.name == Clicktype)

    if (darkEnergy >= upgradeFound.price) {
      darkEnergy -= upgradeFound.price
      upgradeFound.quantity++
      upgradeFound.price += percentage('10', `${upgradeFound.price}`)
      console.log(upgradeFound.price)
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
      upgradeFound.price += percentage('10', `${upgradeFound.price}`)
    }
    else (console.log('Not Enough Money'))
    Update()
  }
  function percentage(partialValue, totalValue) {
    return Math.round((100 * partialValue) / totalValue);
  }
}
Update()
setInterval(autoHarvest, 1000)