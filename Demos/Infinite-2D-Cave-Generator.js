var observer = require('continuous-observer')
var cave = require('cave-automata-2d')
var fill = require('ndarray-fill')
var zero = require('zeros')
var raf = require('raf')

var canvas = document.createElement('canvas')
var ctx = canvas.getContext('2d')

// Set up the controls, so that we can control
// the camera with the arrow keys or WASD.
var controls = require('kb-controls')(document.body, {
  '<up>': 'up',
  '<down>': 'down',
  '<left>': 'left',
  '<right>': 'right',
  'W': 'up',
  'S': 'down',
  'A': 'left',
  'D': 'right'
})

var field = require('ndarray-continuous')({
  shape: [28, 28], // Make each chunk 28 elements high/wide
  getter: getter
})

// This method generates a new chunk for
// the continuous ndarray if it's needed.
//
// Here we're creating an empty ndarray, then
// filling it up with cave-automata-2d. We're
// also inverting it so that we can get links
// between the chunks without much extra work.
function getter(position, done) {
  var array = zero(this.shape)
  cave(array)(10)
  invert(array)
  return done(null, array)
}

function invert(array) {
  return fill(array, function(x, y) {
    return 1 - array.get(x, y)
  })
}

// We'll use continuous-observer to add and remove
// chunks as needed, based on the camera's position
// each frame.
var moveTo = observer(field)

var camera = {
  x: 0,
  y: 0
}

raf().on('data', function() {
  if (controls.up)    camera.y -= 0.25
  if (controls.down)  camera.y += 0.25
  if (controls.left)  camera.x -= 0.25
  if (controls.right) camera.x += 0.25

  moveTo([camera.x, camera.y])

  ctx.fillStyle = '#f2f2f2'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Iterate over each chunk in the continuous-ndarray,
  // drawing each one according to their position on the
  // grid.
  field.each(function(chunk) {
    var pos = chunk.position
    var w = chunk.shape[0]
    var h = chunk.shape[1]

    var offset = {
      x: chunk.position[0] * chunk.shape[0],
      y: chunk.position[1] * chunk.shape[1]
    }

    ctx.fillStyle = '#af3'
    for (var x = 0; x < w; x += 1) {
      for (var y = 0; y < h; y += 1) {
        if (chunk.get(x, y) > 0) {
          ctx.fillRect(
            (offset.x + x - camera.x) * 40,
            (offset.y + y - camera.y) * 40,
            40,
            40
          )
        }
      }
    }

  })
})

document.body.style.margin =
document.body.style.padding = 0
document.body.style.overflow = 'hidden'
document.body.appendChild(canvas)

canvas.width = window.innerWidth
canvas.height = window.innerHeight