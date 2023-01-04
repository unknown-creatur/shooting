input.onGesture(Gesture.TiltLeft, function () {
    _2p.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.A, function () {
    _1p.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.Shake, function () {
    _1p1 = game.createSprite(2, 4)
    _2p1 = game.createSprite(0, 4)
    _3p = game.createSprite(4, 4)
    _4p = game.createSprite(1, 4)
    _5p = game.createSprite(3, 4)
    bullet = game.createSprite(_1p1.get(LedSpriteProperty.X), _1p1.get(LedSpriteProperty.Y))
    bullet1 = game.createSprite(_2p1.get(LedSpriteProperty.X), _2p1.get(LedSpriteProperty.Y))
    bullet2 = game.createSprite(_3p.get(LedSpriteProperty.X), _3p.get(LedSpriteProperty.Y))
    bullet3 = game.createSprite(_4p.get(LedSpriteProperty.X), _4p.get(LedSpriteProperty.Y))
    bullet4 = game.createSprite(_5p.get(LedSpriteProperty.X), _5p.get(LedSpriteProperty.Y))
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 4; index++) {
            bullet.change(LedSpriteProperty.Y, -1)
            bullet1.change(LedSpriteProperty.Y, -1)
            bullet2.change(LedSpriteProperty.Y, -1)
            bullet3.change(LedSpriteProperty.Y, -1)
            bullet4.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
        }
    }
    bullet.delete()
    bullet1.delete()
    bullet2.delete()
    bullet3.delete()
    bullet4.delete()
    basic.pause(100)
    _1p1.delete()
    _2p1.delete()
    _3p.delete()
    _4p.delete()
    _5p.delete()
})
input.onButtonPressed(Button.AB, function () {
    bullet = game.createSprite(_1p.get(LedSpriteProperty.X), _1p.get(LedSpriteProperty.Y))
    bullet1 = game.createSprite(_2p.get(LedSpriteProperty.X), _2p.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        bullet.change(LedSpriteProperty.Y, -1)
        bullet1.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    bullet.delete()
    bullet1.delete()
})
input.onButtonPressed(Button.B, function () {
    _1p.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.TiltRight, function () {
    _2p.change(LedSpriteProperty.X, 1)
})
let bullet4: game.LedSprite = null
let bullet3: game.LedSprite = null
let bullet2: game.LedSprite = null
let bullet1: game.LedSprite = null
let bullet: game.LedSprite = null
let _5p: game.LedSprite = null
let _4p: game.LedSprite = null
let _3p: game.LedSprite = null
let _2p1: game.LedSprite = null
let _1p1: game.LedSprite = null
let _2p: game.LedSprite = null
let _1p: game.LedSprite = null
game.setScore(0)
let airplane = game.createSprite(0, 0)
_1p = game.createSprite(1, 4)
_2p = game.createSprite(3, 4)
basic.forever(function () {
    if (airplane.isTouching(_1p)) {
        game.gameOver()
    }
})
basic.forever(function () {
    if (bullet) {
        if (bullet.isTouching(airplane)) {
            game.addScore(1e+284)
            airplane.set(LedSpriteProperty.X, 0)
            airplane.set(LedSpriteProperty.Y, 0)
        }
    }
    if (bullet1) {
        if (bullet1.isTouching(airplane)) {
            game.addScore(1e+284)
            airplane.set(LedSpriteProperty.X, 0)
            airplane.set(LedSpriteProperty.Y, 0)
        }
    }
    if (bullet2) {
        if (bullet2.isTouching(airplane)) {
            game.addScore(1e+284)
            airplane.set(LedSpriteProperty.X, 0)
            airplane.set(LedSpriteProperty.Y, 0)
        }
    }
    if (bullet3) {
        if (bullet3.isTouching(airplane)) {
            game.addScore(1e+284)
            airplane.set(LedSpriteProperty.X, 0)
            airplane.set(LedSpriteProperty.Y, 0)
        }
    }
    if (bullet4) {
        if (bullet4.isTouching(airplane)) {
            game.addScore(1e+284)
            airplane.set(LedSpriteProperty.X, 0)
            airplane.set(LedSpriteProperty.Y, 0)
        }
    }
})
basic.forever(function () {
    basic.pause(randint(1, 300))
    airplane.change(LedSpriteProperty.X, 1)
    if (airplane.get(LedSpriteProperty.X) == 4) {
        basic.pause(randint(1, 300))
        airplane.change(LedSpriteProperty.Y, 1)
        airplane.set(LedSpriteProperty.X, 0)
    }
})
