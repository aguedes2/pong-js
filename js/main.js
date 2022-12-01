import * as base from './base.js'
import entity from './entities.js'
import { cnv } from './constants.js'

window.onload = function () {
  console.log('carregando o jogo Pong')
  entity.ball.init(cnv)
  entity.racket.playerRacket.init(cnv)
  entity.racket.enemyRacket.init(cnv)
  base.gameLoop()
}
