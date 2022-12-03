let enemyRacket = {
  xpos: 0,
  ypos: 0,
  width: 10,
  height: 90,
  yvel: 5,
  color: 'white',
  init: function (y, cnv) {
    this.move(y)
    this.xpos = cnv.width - this.width - 2
    this.ypos = (cnv.height - this.height) / 2
  },
  draw: function (ctx) {
    ctx.fillStyle = 'white'
    ctx.fillRect(this.xpos, this.ypos, this.width, this.height)
    ctx.fill()
  },
  update: function (y) {},
  move: function (y) {
    this.ypos = y + 8
  }
}

let playerRacket = {
  xpos: 0,
  ypos: 0,
  width: 10,
  height: 90,
  yvel: 15,
  color: 'whilte',
  init: function (cnv) {
    this.xpos = 2
    this.ypos = (cnv.height - this.height) / 2
    this.move(cnv)
  },
  draw: function (ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.xpos, this.ypos, this.width, this.height)
    ctx.fill()
  },
  update: function (cnv) {},

  move: function (cnv) {
    addEventListener('keydown', (e) => {
      let key = e.key
      let ydir = 0

      if (key === 'ArrowUp' && this.ypos > 0) {
        ydir = -1
      } else if (key === 'ArrowDown' && this.ypos + this.height < cnv.height) {
        ydir = 1
      }

      this.ypos += this.yvel * ydir
    })
  }
}

export default { playerRacket, enemyRacket }
