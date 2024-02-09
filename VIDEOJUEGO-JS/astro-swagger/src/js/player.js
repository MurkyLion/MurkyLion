import { Shutting, Enable,Idle, Walk, Slash, Punch, Block, Thrust, Hurt, Dead } from "./playerStates.js"

export class Player
{
    constructor(game)
    {
        this.game = game
        this.width = 128
        this.height = 128
        this.x = 0
        this.y = this.game.height - this.height - this.game.groundMargin
        this.frameX = 0
        this.frameY = 2
        this.maxFrame = 4
        this.fps = 10
        this.frameInterval = 1000/ this.fps
        this.frameTimer = 0
        this.image = document.getElementById('player')
        this.speed = 0
        this.vy = 0
        this.gravity = 1
        this.states = [new Shutting(this), new Enable(this), new Idle(this), new Walk(this), new Slash(this), new Punch(this), new Block(this), new Thrust(this), new Hurt(this), new Dead(this)]
        this.currentState = this.states[2]
        this.currentState.enter()
        this.energy = 4
        this.currentEnergy = 4
        this.score = 0
        this.idleTime = 0
        this.collision = false
    }

    update(input, deltaTime)
    {
        this.checkCollision()
        this.currentState.handleInput(input)

        this.x += this.speed
        if (input.includes('ArrowRight')) this.speed = 8
        else if (input.includes('ArrowLeft')) this.speed = -8
        else this.speed = 0

        if (this.x >= this.game.width - this.width) 
        {
            this.x = this.game.width - this.width
        }
        else if(this.x <= 0)
        {
            this.x = 0
        }

        this.y -= this.vy

        if (input.includes('ArrowUp') && this.onGround()) this.vy = 24
        else if (!this.onGround()) this.vy -= this.gravity 
        else this.vy = 0

        if (this.frameTimer > this.frameInterval)
        {
            this.frameTimer = 0
            if(this.frameX < this.maxFrame) this.frameX++
            else this.frameX = 0
        }
        else
        {
            this.frameTimer += deltaTime
        }
    }

    draw(context)
    {
        context.drawImage(
            this.image,  
            this.frameX * this.width, 
            this.frameY * this.height, 
            this.width,
            this.height,
            this.x, 
            this.y, 
            this.width, 
            this.height)
    }

    onGround()
    {
        return this.y >= this.game.height - this.height - this.game.groundMargin
    }

    setState(state)
    {
        this.currentState = this.states[state]
        this.currentState.enter()
    }

    checkCollision()
    {
        this.game.enemies.forEach(enemy => {
            if(
                enemy.x < this.x + this.width &&
                enemy.x + enemy.width > this.x &&
                enemy.y < this.y + this.height &&
                enemy.y + enemy.height > this.y
              )
            {
                if(!enemy.killed) this.score++
                enemy.killed = true
            }
            else
            {
                //no collision
            }
        })
    }

    isWalking()
    {
        return this.currentState = this.states[3]
    }

    isBlocking()
    {
        return this.currentState = this.states[6]
    }

    isDead()
    {
        return this.currentState = this.states[9]
    }
}