namespace summary {

    export interface ProblemResult {
        line:string
        isCorrect:boolean
        oneline:boolean
    }

    const titleImage = img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff11111ffffffffffffffffffffffffffffffff1fffff1fffffffffffffffffff
        ffffffffffffffff11fff11ffffffffffffffffffffffffffffff1fffff1ffffffffffffffffffff
        ffffffffffffffff11fff11fffffffffffffff111ffffffffffff1fffff1ffffffffffffffffffff
        ffffffffffffffff1ffff11fffff11fffffff1ff11fffffffffff1fffff1ffffffffffffffffffff
        ffffffffffffffff11fff1ffff11ff11fffff1fffffffffffffff1fff11111ffffffffffffffffff
        ffffffffffffffff1f1111fff11fffff11fff1fffffff1fff1fff1fffff1ffffffffffffffffffff
        ffffffffffffffff1ff11ffff1fffffff1fff11f11fff1fff1fff1fffff1ffffffffffffffffffff
        ffffffffffffffff11ff11fff1ff111111ffff1111fff1fff1fff1fffff1ffffffffffffffffffff
        fffffffffffffffff1fff11fff1ffffffffffffff1fff1fff1fff1fffff1ff1fffffffffffffffff
        fffffffffffffffff1fffff1fff1111ff11ff1fff1fff1fff1fff1f1fff111ffffffffffffffffff
        fffffffffffffffffffffffffffffff11ffff1111ffff1111f1fff11ffff11ffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `
    const tickSignImage = img`
        . 1 1 1 1 1 . .
        1 . . . . 7 1 .
        1 . . . 7 7 1 .
        1 . . 7 7 6 1 .
        1 7 . 7 6 . 1 .
        1 . 7 6 . . 1 .
        . 1 1 1 1 1 . .
        . . . . . . . .
    `;
    const crossSignImage = img`
        . 1 1 1 1 1 . .
        1 2 . . . 2 1 .
        1 . 2 . 2 . 1 .
        1 . . 2 . . 1 .
        1 . 2 . 2 . 1 .
        1 2 . . . 2 1 .
        . 1 1 1 1 1 . .
        . . . . . . . .
    `;

    const LINE_SPRITE_KIND = SpriteKind.create()

    export function setUpSummaryScene(name:string, judgeSpriteImage:Image) {
        game.pushScene()

        sprites.onOverlap(LINE_SPRITE_KIND, LINE_SPRITE_KIND, function(sprite: Sprite, otherSprite: Sprite) {
            sprite.vy = 0
            otherSprite.vy = 0
        })            
        scene.setBackgroundColor(15)

        let tempImage = image.create(160, 20)
        tempImage.fill(15)
        tempImage.drawTransparentImage(titleImage, 40, 0)
        let titleSprite = sprites.create(tempImage, LINE_SPRITE_KIND)
        titleSprite.y -= 35
        
        let judgeSprite = sprites.create(judgeSpriteImage)
        judgeSprite.x = 150
        judgeSprite.y = 110
        judgeSprite.z = 1
        
        judgeSprite.say(name)
    }

    export function textUp(problemResults:ProblemResult[]) {
        for (let i = 0; i < problemResults.length; i++) {

            let result = problemResults[i]
            if (result.oneline) {
                textUpImpl(result.line, result.isCorrect, 0, true)
            } else {
                textUpImpl(problemResults[i].line, problemResults[i].isCorrect, -1,false)
                textUpImpl(problemResults[i+1].line, problemResults[i+1].isCorrect, 1, false)
                i++
            }

            pause(1200) // line height / vy speed + 200 margin
        }
    }
    
    function textUpImpl(text:string, isCorrect:boolean, sign:number, oneline:boolean) {

        let spriteImage = image.create(oneline?160:80, 10)
        spriteImage.fill(15)
        spriteImage.print(text, 10, 1, 1, image.font8)
        spriteImage.drawTransparentImage(isCorrect?tickSignImage:crossSignImage, oneline?150:70, 1)

        let lineSprite = sprites.create(spriteImage, LINE_SPRITE_KIND)
        lineSprite.x += 40*sign
        lineSprite.y = 140
        lineSprite.vy = -20
    }

}