import * as base from './base.js'
import entity from './entities.js'
import { width, height } from './constants.js'

window.onload = function () {
  base.gameLoop()
  console.log('carregando o jogo Pong')
  entity.ball.init(width, height)
  entity.racket.playerRacket.init(height)
  entity.racket.enemyRacket.init(width, height)
}
