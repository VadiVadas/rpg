const Aoijs = require("aoi.js")
var fs = require('fs')
const bot = new Aoijs.Bot({
  sharding: false, 
  shardAmount: 2, 
  mobile: false, 
  token: "TOKEN", 
  prefix: ["+"]
})
 
bot.onMessage() 
var reader = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./commands/${file}`)
  bot.command({
    name: command.name,
    code: command.code
  })
bot.status({
  text:"$getServerVar[prefix]help",
  type: 'PLAYING',
  status: 'idle',
  time: 10
});
  
bot.variables({
  prefix: '+',
  color: '00ccff',
  prem: '0',
  xp: '0',
  m: '',
  steve: '1',
  frank: '0',
  jojik: '0',
  lesha: '0',
  vadichka: '0',
  lloyd: '0',
  mopsick: '0',
  choose: 'Стив <:Steve:837714045251092500>',
  coin: '0',
  lists: '<:Steve:837714045251092500> Стив',
  war: '0',
  team: '825744250430947379',
  pp: '0',
  com: '',
  boss: '1000000',
  hp: '1000',
  heal: '0',
  bossname: '',
  io1: '50',
  io2: '200'
})

}

bot.command({
name: "ban",
code: `$ban[$mentioned[1]]
$title[Успешно]
$description[Вы успешно забанили <@$mentioned[1]>]
$color[00ccff]
$only[onlы забыли упомянуть человека, которому хотите выдать BAN]
$onlyPerms[admin;]
`
})

bot.command({
name: "clear",
code: `$clear[$message]
$title[Успешно]
$description[Вы успешно очистили чат на $message сообшений]
$color[00ccff]
$onlyPerms[admin;]`
})

bot.command({
name: "kick",
code: `$kick[]
$title[Успешно]
$description[Вы успешно кикнули <@$mentioned[1]>]
$color[00ccff]
$argsCheck[>1;Вы забыли упомянуть человека, которому хотите выдать KICK]
$onlyPerms[admin;]
`
})

bot.command({
 name: "play",
 usage: "play <song_name/song_url>",
 aliases: ["p"],
 description: "memutar music dari youtube",
 code: `
$title[Музыка]
 $description[$replaceText[$replaceText[$checkCondition[$queueLength!=1];false; Играет];true;Следующие в очереди] $playSong[$message;$replaceText[$replaceText[$getServerVar[prem];0;2m;1];1;6d;1];yes;Не найдено]]
 $color[00ccff]
$argsCheck[>1;Укажите название песни]
$onlyIf[$voiceID!=;Вас нету в голосовом канале]

`
})

bot.command({
name: "stop",
  code: `
  $replaceText[$stopSong;Queue ended, leaving voice channel!;Очередь закончилась, выхожу из голосового канала!;1]

`
})

bot.command({
  name: "help",
  code: `
  $title[Помощь по командам]
  $description[$getServerVar[prefix]help
  
  $getServerVar[prefix]play
  
  $getServerVar[prefix]stop
  
  $getServerVar[prefix]kick
  
  $getServerVar[prefix]ban
  
  $getServerVar[prefix]clear
  
  $getServerVar[prefix]prefix
  
  $getServerVar[prefix]skip
  
  $getServerVar[prefix]pause
  
  $getServerVar[prefix]resume]
  $color[00ccff]
`
})

bot.command({
  name: "skip",
    aliases: ["s"],
  code: `$skipSong
`
})

bot.command({
  name: "pause",
  code: `$pauseSong
`
})

bot.command({
  name: "resume",
  code: `$resumeSong `
})

bot.joinCommand({
        channel: "827884268826001458", 
        code: `$onlyForServers[827875775520047115]
        $giveRole[$authorID;827891695248736286]`
})
bot.onJoined()

bot.command({
  name: "repeat",
  code: `$title[Музыка]
          $description[$replaceText[$replaceText[$loopQueue;true;Вы включили повтор вашего плейлиста;1];false;Вы отключили повтор вашего плейлиста;1]]
$color[00ccff]`
})

bot.command({
name: "verify",
code: `$giveRole[$authorID;827883646236098570]
$takeRole[$authorID;827891695248736286]
$giveRole[$authorID;827884333153910815]
$deletecommand
$onlyForChannels[827884268826001458; ]`
})

bot.loopCommand({
code: `
$editMessage[835887649251786842;{title:Статус бота}{description:Задержка бота - $pingms
CPU: $cpu% / 100%
RAM: $ram MB / $maxRam MB
Время работы - $replaceText[$replaceText[$replaceText[$replaceText[$uptime;d;д];h;ч];m;м];s;с]
Сервера - $serverCount
Пользователи - $allMembersCount

Обновлено $day $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;January;января];February;февраля];March;марта];April;апреля];May;мая];June;июня];July;июля];August;августа];September;сентября];October;октября];November;ноября];December;декабря] $year в $hour:$minute:$second}{color:00ccff}
;827881414107725824]`,
channel: "827881414107725824",
executeOnStartup: true,
every: 5000
})

bot.awaitedCommand({
  name: "ping1",
  code: `$giveRole[$authorID;827988046594441267]`
})

bot.awaitedCommand({
  name: "ping2",
  code: `$giveRole[$authorID;828557110274687007]`
})

bot.awaitedCommand({
  name: "ping3",
  code: `$giveRole[$authorID;828557111284727818]`
})

bot.awaitedCommand({
  name: "role1",
  code: `$giveRole[$authorID;836056331344805919]`
})

bot.awaitedCommand({
  name: "role2",
  code: `$giveRole[$authorID;836056479278301205]`
})

bot.awaitedCommand({
  name: "role3",
  code: `$giveRole[$authorID;836056610190131261]`
})

bot.awaitedCommand({
  name: "role4",
  code: `$giveRole[$authorID;836056790541533244]`
})

bot.awaitedCommand({
  name: "role5",
  code: `$giveRole[$authorID;836056948976648232]`
})

bot.awaitedCommand({
  name: "role6",
  code: `$giveRole[$authorID;836057077494841385]`
})

bot.awaitedCommand({
  name: "role7",
  code: `$giveRole[$authorID;836057195409309696]`
})

bot.awaitedCommand({
  name: "role8",
  code: `$giveRole[$authorID;836057477031133215]`
})

bot.loopCommand({
code: `
$editMessage[836088032783368192;{title: Роли}{description:🈯- <@&836056331344805919>
🔵- <@&836056479278301205>
🔺- <@&836056610190131261>
🔯- <@&836056790541533244>
🆔- <@&836056948976648232>
🈁- <@&836057077494841385>
🆘- <@&836057195409309696>
🚗- <@&836057477031133215>}{color: 00ccff}]
$reactionCollector[836088032783368192;everyone;1d;🈯,🔵,🔺,🔯,🆔,🈁,🆘,🚗;role1,role2,role3,role4,role5,role6,role7,role8;no]
`,
channel: "827882041323945985",
executeOnStartup: true,
every: 1800000
})

bot.command({
name: "$alwaysExecute", 
code: `$setUserVar[xp;$sum[$getUserVar[xp];$random[1;4]];$authorID]`
})

bot.command({
  name: "start",
  code: `
  $title[Конец битвы]
  $description[
$addField[Враг:;
$
$getUserVar[bossname] - $getUserVar[boss]]

$addField[Герои:;
$if[$getUserVar[pp]==0]
**$username**) $getUserVar[choose] - $getUserVar[hp]

$else

**$username**) $getUserVar[choose] - $getUserVar[hp]
**$username[$getUserVar[team]]**) $getUserVar[choose;$getUserVar[team]] - $getUserVar[hp;$getUserVar[team]]       
$endif]]

$setUserVar[war;0]
$setUserVar[war;0;$getUserVar[team]]
  $wait[1m]
  $color[00ccff]`
})
