input.onButtonPressed(Button.A, function () {
    _1p.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    bullet = game.createSprite(_1p.get(LedSpriteProperty.X), _1p.get(LedSpriteProperty.Y))
    bullet1 = game.createSprite(_1p.get(LedSpriteProperty.X), _1p.get(LedSpriteProperty.Y))
    bullet2 = game.createSprite(_1p.get(LedSpriteProperty.X), _1p.get(LedSpriteProperty.Y))
    bullet3 = game.createSprite(_1p.get(LedSpriteProperty.X), _1p.get(LedSpriteProperty.Y))
    bullet4 = game.createSprite(_1p.get(LedSpriteProperty.X), _1p.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        bullet.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (bullet.isTouchingEdge()) {
            bullet.delete()
        }
    }
    bullet.delete()
    basic.pause(randint(1, 100))
    for (let index = 0; index < 4; index++) {
        bullet1.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (bullet1.isTouchingEdge()) {
            bullet1.delete()
        }
    }
    bullet1.delete()
    basic.pause(randint(1, 300))
    for (let index = 0; index < 4; index++) {
        bullet2.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (bullet2.isTouchingEdge()) {
            bullet2.delete()
        }
    }
    bullet2.delete()
    basic.pause(randint(1, 300))
    for (let index = 0; index < 4; index++) {
        bullet3.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (bullet3.isTouchingEdge()) {
            bullet3.delete()
        }
    }
    bullet3.delete()
    basic.pause(randint(1, 300))
    for (let index = 0; index < 4; index++) {
        bullet4.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    bullet4.delete()
})
input.onButtonPressed(Button.B, function () {
    _1p.change(LedSpriteProperty.X, 1)
})
let secret = 0
let bullet4: game.LedSprite = null
let bullet3: game.LedSprite = null
let bullet2: game.LedSprite = null
let bullet1: game.LedSprite = null
let bullet: game.LedSprite = null
let _1p: game.LedSprite = null
game.setScore(0)
let airplane = game.createSprite(0, 0)
_1p = game.createSprite(2, 4)
basic.forever(function () {
    if (airplane.isTouching(_1p)) {
        game.gameOver()
    }
})
basic.forever(function () {
    secret = 0
    if (bullet) {
        if (bullet.isTouching(airplane)) {
            game.addScore(-1)
            airplane.set(LedSpriteProperty.X, 0)
            airplane.set(LedSpriteProperty.Y, 0)
        }
    }
    if (bullet1) {
        if (bullet1.isTouching(airplane)) {
            game.addScore(-1)
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
