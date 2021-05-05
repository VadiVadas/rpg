module.exports = ({
  name: "steve",
  code: `
  $if[$message[1]==sell]
  $setUserVar[lists;$replaceText[$getUserVar[lists];Стив <:Steve:837714045251092500>;;-1]]
  $endif
  
  $if[$message[1]==choose]
  $setUserVar[choose;Стив <:Steve:837714045251092500>]
  $endif`
})