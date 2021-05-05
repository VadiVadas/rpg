module.exports = ({
  name: "mopsick",
  code: `
  $if[$message[1]==sell]
  $setUserVar[lists;$replaceText[$getUserVar[lists];<:Mopsick:838467298037071903> Мопсик;;-1]]
  $endif
  
  $if[$message[1]==choose]
  $setUserVar[io1;1000]
  $setUserVar[io2;2000]
  $setUserVar[choose;Мопсик <:Mopsick:838467298037071903>]
  $endif`
})