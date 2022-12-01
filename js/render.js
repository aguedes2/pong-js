import { width, height, ctx, cnv } from './constants.js'
import entity from './entities.js'

cnv.width = width
cnv.height = height

function drawCourt() {
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, width, height)
  linha(width / 2, 0, width / 2, height)
}

function linha(xStart, yStart, xEnd, yEnd) {
  ctx.lineWidth = 5
  ctx.strokeStyle = '#FFF'
  ctx.beginPath()
  ctx.moveTo(xStart, yStart)
  ctx.lineTo(xEnd, yEnd)
  ctx.stroke()
}

function cleanRect() {
  consts.ctx.clearRect(0, 0, consts.width, consts.height)
}

function render() {
  drawCourt()
  entity.ball.draw(cnv, ctx)
  entity.racket.playerRacket.draw(ctx)
  entity.racket.enemyRacket.draw(ctx)
}

export default render
