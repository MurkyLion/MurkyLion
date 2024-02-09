export class Enemy
{
    constructor(game)
    {
        this.game = game
        this.width = 128
        this.height = 128
        this.x = this.game.width
        this.y = this.game.height - this.width - this.game.groundMargin
        this.frameX = 0
        this.frameY = 0
        this.maxFrame = 3
        this.image = document.getElementById('enemy')
        this.fps = 20
        this.frameInterval = 1000/this.fps
        this.frameTimer = 0
        this.speed = 3
        this.killed = false
    }

    update(deltaTime)
    {
        this.x -= this.speed

        if (this.frameTimer >= this.frameInterval)
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
        if(!this.killed)context.drawImage(this.image,this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height)
    }
}
