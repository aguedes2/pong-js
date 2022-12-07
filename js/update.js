import render from './render.js'
import entity from './entities.js'
import { height, width, ctx } from './constants.js'

function update() {
  entity.ball.update(width, height)
  entity.racket.playerRacket.update()
  entity.racket.enemyRacket.update(entity.ball.ypos, height)
  entity.ball.collisions(entity.racket.playerRacket, entity.racket.enemyRacket)
  render()
}

export default update
