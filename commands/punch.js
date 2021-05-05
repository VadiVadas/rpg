module.exports = ({
  name: "punch",
  code: `$setUserVar[boss;$sub[$getUserVar[boss];$random[$getUserVar[io1];$getUserVar[io2]]]]
  $setUserVar[boss;$sub[$getUserVar[boss;$getUserVar[team]];$random[$getUserVar[io1];$getUserVar[io2]]];$getUserVar[team]]
  $onlyIf[$getUserVar[war]==1;ERROR]
  $setUserVar[hp;$sub[$getUserVar[hp];$random[$getUserVar[io1];$getUserVar[io2]]]]
  $onlyIf[$getUserVar[hp]>0;Вас убили]
  $title[Удар]
  $description[
$addField[Враг:;
$getUserVar[bossname] - $getUserVar[boss]

$addField[Герои:;$if[$getUserVar[pp]==0]
$getUserVar[choose] - $getUserVar[hp]
$else 
**$username**) $getUserVar[choose] - $getUserVar[hp]
**$username[$getUserVar[team]]**) $getUserVar[choose;$getUserVar[team]] - $getUserVar[hp;$getUserVar[team]]       
$endif]
$color[00ccff]`
})