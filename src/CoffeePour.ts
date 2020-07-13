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

export default CoffeePour
