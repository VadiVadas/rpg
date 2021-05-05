module.exports = ({
  name: "vadichka",
  code: `
  $if[$message[1]==sell]
  $setUserVar[lists;$replaceText[$getUserVar[lists];<:VadichkaVadas:837714210854142022> Вадичка;;-1]]
  -
  $endif
  
  $if[$message[1]==choose]
  $setUserVar[io1;500]
  $setUserVar[io2;1000]
  $setUserVar[choose;Вадичка <:VadichkaVadas:837714210854142022>]
  $endif`
})