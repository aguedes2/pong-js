let enemyRacket = {
  xpos: 0,
  ypos: 0,
  width: 10,
  height: 90,
  yvel: 5,
  color: 'white',
  init: function (cnv) {
    this.xpos = cnv.width - this.width - 2
    this.ypos = (cnv.height - this.height) / 2
  },
  draw: function (ctx) {
    ctx.fillStyle = 'white'
    ctx.fillRect(this.xpos, this.ypos, this.width, this.height)
    ctx.fill()
  },
  update: function (y, cnv) {
    this.move(y, cnv)
  },
  move: function (y, cnv) {
    this.ypos = y + 8
  }
}

let playerRacket = {
  xpos: 0,
  ypos: 0,
  width: 10,
  height: 90,
  yvel: 0.8,
  color: 'whilte',
  init: function (cnv) {
    this.xpos = 2
    this.ypos = (cnv.height - this.height) / 2
  },
  draw: function (ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.xpos, this.ypos, this.width, this.height)
    ctx.fill()
  },
  update: function (cnv) {
    this.move(cnv)
  },
  move: function (cnv) {
    addEventListener('keydown', (event) => {
      this.ypos =
        event.code === 'ArrowUp'
          ? this.ypos - 0.5
          : event.code === 'ArrowDown'
          ? this.ypos + 0.5
          : this.ypos
    })
    return
  }
}

export default { playerRacket, enemyRacket }
