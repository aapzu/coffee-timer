import lcd from "./LCD"

class Logger {
  consoleLog = console.draft()

  log(content: string) {
    this.consoleLog(content)
    const lines = content.split("\n")

    if (lines.length > 2) {
      throw new Error("Only two lines are allowed")
    }

    for (let i = 0; i < lines.length; i++) {
      lcd.log(lines[i], i)
    }
  }
}

const logger = new Logger()

export default logger
