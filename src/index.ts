import CoffeePour from "./CoffeePour"

import * as luxon from "luxon"
import * as readline from "readline"
import DraftLog from "draftlog"
import Timer from "./Timer"

readline.emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)
DraftLog(console)

console.log("Press any key to (re)start a new coffee timer\n")

const timer = new Timer()

process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    process.exit()
  } else if (key.name === "space") {
    timer.start()
  } else if (key.name === "s") {
    timer.stop()
  }
})
