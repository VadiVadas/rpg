module.exports = ({
  name: "lloyd",
  code: `
  $if[$message[1]==sell]
  $setUserVar[lists;$replaceText[$getUserVar[lists];<:LloydGamer:837714242827452466> ЛлойдГеймер;;-1]]
  $endif
  
  $if[$message[1]==choose]
  $setUserVar[io1;500]
  $setUserVar[io2;2500]
  $setUserVar[choose;ЛлойдГеймер <:LloydGamer:837714242827452466>]
  $endif`
})