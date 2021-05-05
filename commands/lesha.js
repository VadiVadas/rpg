module.exports = ({
  name: "lesha",
  code: `
  $if[$message[1]==sell]
  $setUserVar[lists;$replaceText[$getUserVar[lists];<:LeshaWorld:837714166177333371> ЛёшаВорлд;;-1]]
  $endif
  
  $if[$message[1]==choose]
  $setUserVar[io1;1500]
  $setUserVar[io2;3000]
  $setUserVar[choose;ЛёшаВорлд <:LeshaWorld:837714166177333371>]
  $endif`
})