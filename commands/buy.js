module.exports = ({
  name: "buy",
  code: `$if[$message==heal]
  $setUserVar[coin;$sub[$getUserVar[coin];1000]]
  $setUserVar[heal;$sum[$getUserVar[heal];1]]
  $onlyIf[$getUserVar[coin]>=1000;Недостаточно средств]
  $endif
  
  $if[$message==vadichka]
  $setUserVar[coin;$sub[$getUserVar[coin];1000000]]
  $setUserVar[lists;$getUserVar[lists]
<:VadichkaVadas:837714210854142022> Вадичка]
$onlyIf[$getUserVar[coin]>=1000000;Недостаточно средств]
$setUserVar[vadichka;1]
  $endif
  
  $if[$message==lesha]
  $setUserVar[coin;$sub[$getUserVar[coin];5000000]]
  $setUserVar[lists;$getUserVar[lists]
<:LeshaWorld:837714166177333371> ЛёшаВорлд]
$onlyIf[$getUserVar[coin]>=5000000;Недостаточно средств]
$setUserVar[lesha;1]
  $endif
  
  $if[$message==mopsick]
  $setUserVar[coin;$sub[$getUserVar[coin];4000000]]
  $setUserVar[lists;$getUserVar[lists]
<:Mopsick:838467298037071903> Мопсик]
$onlyIf[$getUserVar[coin]>=4000000;Недостаточно средств]
$setUserVar[mopsick;1]
  $endif
  
  $if[$message==lloyd]
  $setUserVar[coin;$sub[$getUserVar[coin];2000000]]
  $setUserVar[lists;$getUserVar[lists]
<:LloydGamer:837714242827452466> ЛлойдГеймер]
$onlyIf[$getUserVar[coin]>=2000000;Недостаточно средств]
$setUserVar[lloyd;1]
  $endif`
})