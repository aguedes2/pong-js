import * as consts from './constants.js'
import update from './update.js'

let loop

export function gameLoop() {
  consts.cnv.f
  loop = setInterval(() => {
    update()
  }, 1000 / consts.FPS)
}
