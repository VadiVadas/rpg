module.exports = ({
  name: "heal",
  code: `$setUserVar[hp;$sum[$getUserVar[hp;$mentioned[1]];700];$mentioned[1]] +700 healt
  $onlyIf[$getUserVar[heal]>0;У вас нет таблетки]`
})