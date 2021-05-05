module.exports = {
  name: "start",
  code: `
  $title[Старт битвы]
  $description[
$addField[Враг:;
$randomText[ВИЗЕР;ВАРДЕН;ЭНДЕР ДРАКОН;ПРИЗЫВАТЕЛЬ;ДРЕВНИЙ СТРАЖ] - $getUserVar[boss]]

$addField[Герои:;
$if[$getUserVar[pp]==0]
**$username[$authorID]**) $getUserVar[choose;$authorID] - $getUserVar[hp;$authorID]

$else

**$username[$authorID]**) $getUserVar[choose;$authorID] - $getUserVar[hp;$authorID]
**$username[$getUserVar[team]]**) $getUserVar[choose;$getUserVar[team]] - $getUserVar[hp;$getUserVar[team]]       
$endif]]

$setUserVar[war;1]
$setUserVar[war;1;$getUserVar[team]]
$setUserVar[bossname;$randomText[ВИЗЕР;ВАРДЕН;ЭНДЕР ДРАКОН;ПРИЗЫВАТЕЛЬ;ДРЕВНИЙ СТРАЖ]]
$setUserVar[bossname;$randomText[ВИЗЕР;ВАРДЕН;ЭНДЕР ДРАКОН;ПРИЗЫВАТЕЛЬ;ДРЕВНИЙ СТРАЖ];$getUserVar[team]]
$setUserVar[boss;1000000;$getUserVar[team]]
$setUserVar[boss;1000000]
$color[00ccff]`
}



