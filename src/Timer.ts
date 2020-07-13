import CoffeePour from "./CoffeePour"
import Logger from "./Logger"

class Timer {
  coffee: CoffeePour = null
  interval: NodeJS.Timeout
  logger: Logger

  constructor() {
    this.logger = new Logger()
  }

  start() {
    this.coffee = new CoffeePour()
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      this.logger.log(this.getStatus())
    }, 1000)
  }

  stop() {
    this.coffee = null
  }

  getStatus() {
    return this.coffee ? `
    New coffee pot started at ${this.coffee.getStartTime().toFormat("HH:mm:ss")}
    ${this.coffee.getAge().toFormat("hh:mm:ss")}
    ` : `
    No active coffee pour
    `
  }
}

export default Timer
