// 2P左
input.onGesture(Gesture.TiltLeft, function () {
    _2p.change(LedSpriteProperty.X, -1)
})
// 1P左
input.onButtonPressed(Button.A, function () {
    _1p.change(LedSpriteProperty.X, -1)
})
// 1、2、3、4、5P五連發
input.onGesture(Gesture.Shake, function () {
    if (game.isGameOver()) {
    	
    } else {
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
    }
})
// 1P+2P攻
input.onButtonPressed(Button.AB, function () {
    if (game.isGameOver()) {
    	
    } else {
        bullet = game.createSprite(_1p.get(LedSpriteProperty.X), _1p.get(LedSpriteProperty.Y))
        bullet1 = game.createSprite(_2p.get(LedSpriteProperty.X), _2p.get(LedSpriteProperty.Y))
        for (let index = 0; index < 4; index++) {
            bullet.change(LedSpriteProperty.Y, -1)
            bullet1.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
        }
        bullet.delete()
        bullet1.delete()
    }
})
// 1P右
input.onButtonPressed(Button.B, function () {
    _1p.change(LedSpriteProperty.X, 1)
})
// 2P右
input.onGesture(Gesture.TiltRight, function () {
    _2p.change(LedSpriteProperty.X, 1)
})
// 初始設定
let missile2: game.LedSprite = null
let missile1: game.LedSprite = null
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
// 飛機行進
basic.forever(function () {
    basic.pause(randint(1, 300))
    airplane.change(LedSpriteProperty.X, 1)
    if (airplane.get(LedSpriteProperty.X) == 4) {
        basic.pause(randint(1, 300))
        airplane.change(LedSpriteProperty.Y, 1)
        airplane.set(LedSpriteProperty.X, 0)
    }
})
// 導彈(1)
basic.forever(function () {
    if (game.isGameOver()) {
    	
    } else {
        basic.pause(randint(5000, 10000))
        missile1 = game.createSprite(randint(0, 4), 4)
        if (missile1.isTouching(airplane)) {
            missile1.delete()
        } else {
            missile1.change(LedSpriteProperty.Y, randint(-1, -4))
            missile1.change(LedSpriteProperty.X, randint(-4, 4))
            missile1.ifOnEdgeBounce()
        }
    }
})
// 分數計算
basic.forever(function () {
    if (game.isGameOver()) {
    	
    } else {
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
        if (missile1) {
            if (missile1.isTouching(airplane)) {
                game.addScore(1e+284)
                airplane.set(LedSpriteProperty.X, 0)
                airplane.set(LedSpriteProperty.Y, 0)
            }
        }
        if (missile2) {
            if (missile2.isTouching(missile2)) {
                game.addScore(1e+284)
                missile2.set(LedSpriteProperty.X, 0)
                missile2.set(LedSpriteProperty.Y, 0)
            }
        }
    }
})
// 遊戲結束條件
basic.forever(function () {
    if (airplane.isTouching(_1p)) {
        game.gameOver()
    }
})
// 導彈(1)
basic.forever(function () {
    if (game.isGameOver()) {
    	
    } else {
        basic.pause(randint(5000, 10000))
        missile1 = game.createSprite(2, 4)
        missile1.turn(Direction.Right, 45)
        basic.pause(100)
        missile1.move(-1)
        basic.pause(100)
        missile1.move(-1)
        basic.pause(100)
        missile1.turn(Direction.Left, 90)
        missile1.move(1)
        basic.pause(100)
        missile1.move(1)
        basic.pause(100)
        missile1.delete()
    }
})
// 導彈(2)
basic.forever(function () {
    if (game.isGameOver()) {
    	
    } else {
        basic.pause(randint(5000, 10000))
        missile2 = game.createSprite(2, 4)
        missile2.turn(Direction.Left, 45)
        basic.pause(100)
        missile2.move(1)
        basic.pause(100)
        missile2.move(1)
        basic.pause(100)
        missile2.turn(Direction.Right, 90)
        missile2.move(-1)
        basic.pause(100)
        missile2.move(-1)
        basic.pause(100)
        missile2.delete()
    }
})
