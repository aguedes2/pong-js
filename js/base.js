import * as consts from './constants.js'
import update from './update.js'

let loop

export function gameLoop() {
  loop = setInterval(() => {
    update()
  }, 1000 / consts.FPS)
}
