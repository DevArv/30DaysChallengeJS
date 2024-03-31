// Inheritance practice
class Game {
  constructor (platform) {
    this.platform = platform
  }

  isAvailable () {
    console.log(`This game is available on ${this.platform}`)
  }
}

class Riot extends Game {
  constructor (platform, Game) {
    super(platform)
    this.Game = Game

    console.log(`The game ${this.Game} is available on ${this.platform}`)
  }

  needTools () {
    console.log(`The game ${this.Game} required a keyboard and a mouse to play on ${this.platform}`)
  }
}

const RIOT = new Riot('PC', 'League of Legends')
RIOT.needTools()
