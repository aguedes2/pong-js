import render from './render.js'
import entity from './entities.js'
import { cnv } from './constants.js'

function update() {
  entity.ball.update(cnv)
  entity.racket.playerRacket.update(cnv)
  entity.racket.enemyRacket.update(entity.ball.ypos, cnv)
  entity.ball.collisions(entity.racket.playerRacket, entity.racket.enemyRacket)
  render()
}

export default update
