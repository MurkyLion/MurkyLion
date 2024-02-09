import { Player } from "./player.js"
import { Enemy } from "./enemy.js"
import { InputHandler } from "./input.js"
import { Background } from "./background.js"
import { HUD } from "./hud.js"

window.addEventListener('load', function(){

    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Game 
    {
        constructor(width, height)
        {
            this.width = width
            this.height = height 
            this.groundMargin = 50
            this.speed = 1
            this.player = new Player(this)
            this.enemies = []
            this.enemyCount = Math.floor(Math.random() * 100)
            this.enemyTimer = 0
            this.enemyInterval = 1000
            this.background = new Background(this)
            this.input = new InputHandler()
            this.hud = new HUD(this)
            this.audio = new Audio('./src/audio/pixel-perfect-112527.mp3')
            this.end = false
        }

        update(deltaTime)
        {
            this.enemyTimer++
            if(this.enemyTimer >= this.enemyInterval) 
            {
                this.createEnemies(this.enemyCount)
                this.enemyTimer = 0
            }

            this.background.update()
            this.player.update(this.input.keys, deltaTime)
            this.enemies.forEach(enemy =>{
                enemy.update(deltaTime)
            })

            if(this.player.score >= 100) this.end = true
            
        } 

        draw(context)
        {   
            this.background.draw(context)
            this.enemies.forEach(enemy =>{
                enemy.draw(context)
            })
            this.player.draw(context)
            this.hud.draw(context)
        }

        createEnemies(count)
        {
            for (let i = 0; i < count; i++)
            {
                this.enemies.push(new Enemy(this))
            }
        }
    }

    const game = new Game(canvas.width, canvas.height)
    console.log(game)
    // game.audio.play()

    const font = new FontFace('pressStart', 'url(./src/fonts/PressStart2P-Regular.otf)')

    font.load().then(function(font){
        document.fonts.add(font)
    })
    let lastTime = 0

    // ctx.shadowColor = "lightblue";
    // ctx.shadowOffsetX = 2;
    // ctx.shadowOffsetY = 2;

    ctx.font = "48px pressStart"
    ctx.fillStyle = "white"

    if(!game.end)
    {
        ctx.filter = "sepia(0.3) contrast(1.3) invert(0)"
    }
    else
    {
        ctx.filter = "sepia(0.3) contrast(1.3) invert(1)"
    }


    function animate(timeStamp)
    {
        const deltaTime = timeStamp - lastTime
        lastTime = timeStamp
        ctx.clearRect(0, 0, game.width, game.height)
        if(!game.end)game.update(deltaTime)
        game.draw(ctx)
        requestAnimationFrame(animate)
    }

    animate(0)
})