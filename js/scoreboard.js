import entities from './entities.js'
import { width, height } from './constants.js'

var points = 0

const textMetrics = (ctx, txt) => {
  return ctx.measureText(txt)
}

function draw(ctx) {
  let p1 = `${entities.ball.showPoints()[0]}`
  let p2 = `${entities.ball.showPoints()[1]}`

  let p1Metrics = textMetrics(ctx, `${p1}`)
  let p2Metrics = textMetrics(ctx, `${p2}`)
  ctx.fillStyle = 'white'
  ctx.font = '40px sans-serif'
  ctx.fillText(p1, width / 2 - p1Metrics.width * 4, 50)
  ctx.fillText(p2, width / 2 + p2Metrics.width * 3, 50)
}

export default draw
