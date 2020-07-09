const luxon = require("luxon")
const readline = require('readline')
const DraftLog = require('draftlog')

readline.emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)
DraftLog(console)

interface Console {
  draft: (...args) => (b) => {}
}

class CoffeePour {
  startTime: typeof luxon.DateTime

  constructor() {
    this.restart()
  }

  getStartTime() {
    return this.startTime
  }

  restart() {
    this.startTime = luxon.DateTime.local()
  }

  getAge() {
    return luxon.DateTime.local().diff(this.startTime)
  }
}

let interval = null

console.log("Press 's' to start new coffee timer\n")

const startLine = console.draft()
const timeLine = console.draft()

const restartTimer = () => {
  clearInterval(interval)
  const coffee = new CoffeePour()
  startLine(`New coffee pot started at ${coffee.getStartTime().toFormat("HH:mm:ss")}`)
  interval = setInterval(() => {
    timeLine(coffee.getAge().toFormat("hh:mm:ss"))
  }, 1000)
}

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit()
  } else if (key.name === "s") {
    restartTimer()
  }
})
