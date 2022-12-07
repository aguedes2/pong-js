let enemyRacket = {
  xpos: 0,
  ypos: 0,
  width: 10,
  height: 90,
  yvel: 5,
  color: 'white',
  init: function (w, h) {
    this.xpos = w - this.width - 2
    this.ypos = (h - this.height) / 2
  },
  draw: function (ctx) {
    ctx.fillStyle = 'white'
    ctx.fillRect(this.xpos, this.ypos, this.width, this.height)
    ctx.fill()
  },
  update: function (y, h) {
    this.move(y, h)
  },
  move: function (y, h) {
    let ydir = 0
    ydir = y < this.ypos ? -1 : 1

    if (this.ypos < 0) this.ypos = 0
    else if (this.ypos + this.height > h) this.ypos = h - this.height

    this.ypos += this.yvel * ydir
  }
}

let playerRacket = {
  xpos: 0,
  ypos: 0,
  width: 10,
  height: 90,
  yvel: 15,
  color: 'whilte',
  init: function (h) {
    this.xpos = 2
    this.ypos = (h - this.height) / 2
    this.move(h)
  },
  draw: function (ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.xpos, this.ypos, this.width, this.height)
    ctx.fill()
  },
  update: function () {},

  move: function (h) {
    addEventListener('keydown', (e) => {
      let key = e.key
      let ydir = 0

      if (key === 'ArrowUp' && this.ypos > 0) {
        ydir = -1
      } else if (key === 'ArrowDown' && this.ypos + this.height < h) {
        ydir = 1
      }

      this.ypos += this.yvel * ydir
    })
  }
}

export default { playerRacket, enemyRacket }
