module.exports = ({
  name: "team",
  code: `$setUserVar[com;$authorID;$mentioned[1]]
  $setUserVar[team;$mentioned[1]]
  $setUserVar[team;$authorID;$mentioned[1]]`
})