import Lcd from "lcd"

const lcd = new Lcd({
  rs: 25,
  e: 24,
  data: [23, 17, 21, 22],
  cols: 16,
  rows: 2,
})

export const print = (content: string, line: number) => {
  lcd.setCursor(line, 0)
  lcd.print(content)
}

process.on("SIGINT", () => {
  lcd.close()
  process.exit()
})

export default lcd
