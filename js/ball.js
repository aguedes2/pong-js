var playerPts = 0
var enemyPts = 0
let ball = {
  xpos: 0,
  ypos: 0,
  xvel: 5,
  yvel: 5,
  size: 10,
  color: 'white',
  init: function (cnv) {
    this.xpos = (cnv.width - this.size) / 2
    this.ypos = (cnv.height - this.size) / 2
    this.yvel = Math.floor(Math.random() * 2) < 1 ? -this.yvel : this.yvel
    this.xvel = Math.floor(Math.random() * 2) < 1 ? -this.xvel : this.xvel
  },
  update: function (cnv) {
    this.checkForCanvasCollisions(cnv)
    this.xpos += this.xvel
    this.ypos += this.yvel
  },
  draw: function (cnv, ctx) {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.xpos, this.ypos, this.size, 0, Math.PI * 2, true)
    ctx.fill()
  },
  showPoints: function () {
    return [playerPts, enemyPts]
  },
  checkForCanvasCollisions: function (cnv) {
    if (this.xpos - this.size / 2 < 0) {
      this.xvel = -this.xvel
      setTimeout(() => {
        enemyPts++
      }, 1000)
    }

    if (this.xpos + this.size / 2 > cnv.width) {
      this.xvel = -this.xvel
      setTimeout(() => {
        playerPts++
      }, 1000)
    }
    if (
      this.ypos + this.size / 2 > cnv.height ||
      this.ypos - this.size / 2 < 0
    ) {
      this.yvel = -this.yvel
    }
  },
  collisions: function (racket1, racket2) {
    this.checkRacketCollision(racket1)
    this.checkRacketCollision(racket2)
  },
  deflection: function (y, h) {
    let deltaY = this.ypos - (y + h / 2)
    this.xvel = -this.xvel
    this.yvel = deltaY * 0.25
  },
  checkRacketCollision: function (racket) {
    let radius = this.size / 2
    let leftPlayer = racket.xpos + racket.width < this.xpos - radius
    let rightPlayer = racket.xpos > this.xpos + radius
    let abovePlayer = racket.ypos > this.ypos + radius
    let belowPlayer = racket.ypos + racket.height < this.ypos - radius

    let collide = !(leftPlayer || rightPlayer || abovePlayer || belowPlayer)

    if (collide) {
      this.deflection(racket.ypos, racket.height)
    }
  }
}

export default ball