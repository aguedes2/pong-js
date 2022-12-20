var playerPts
var enemyPts
const pontos = new Audio('../assets/ponto.mp3')

let ball = {
  xpos: 0,
  ypos: 0,
  xvel: 5,
  yvel: 5,
  size: 10,
  color: 'white',
  init: function (w, h) {
    this.xpos = (w - this.size) / 2
    this.ypos = (h - this.size) / 2
    this.yvel = Math.floor(Math.random() * 2) < 1 ? -this.yvel : this.yvel
    this.xvel = Math.floor(Math.random() * 2) < 1 ? -this.xvel : this.xvel
    playerPts = 0
    enemyPts = 0
  },
  update: function (w, h) {
    this.checkForCanvasCollisions(w, h)
    this.xpos += this.xvel
    this.ypos += this.yvel
  },
  draw: function (ctx) {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.xpos, this.ypos, this.size, 0, Math.PI * 2, true)
    ctx.fill()
  },
  showPoints: function () {
    let pontuacao = []
    pontuacao[0] = playerPts
    pontuacao[1] = enemyPts
    return pontuacao
  },
  checkForCanvasCollisions: function (w, h) {
    if (this.xpos - this.size / 2 < 0) {
      this.xvel = -this.xvel
      enemyPts++
      this.xpos = 2 * this.size + 1
      pontos.play()
    }

    if (this.xpos + this.size / 2 > w) {
      this.xvel = -this.xvel
      playerPts++
      this.xpos = w - 2 * this.size + 1
      pontos.play()
    }
    if (this.ypos + this.size / 2 > h || this.ypos - this.size / 2 < 0) {
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
      let raquetada = new Audio('../assets/raquetada.mp3')
      this.deflection(racket.ypos, racket.height)
      raquetada.play()
    }
  }
}

export default ball
