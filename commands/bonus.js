module.exports = {
  name: "bonus",
  code: `$setUserVar[coin;$sum[$getUserVar[coin];1000]]
  +1000 coins`
}