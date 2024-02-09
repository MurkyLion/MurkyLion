class HudComponent
{
    constructor(image,x, y, width, height)
    {
        this.image = image
        this.x = x
        this.y = y
        this.frameX = 0
        this.frameY = 0
        this.width = width
        this.height = height
    }

    update()
    {

    }

    draw(context)
    {
        context.drawImage(this.image,this.frameX, this.frameY, this.width, this.height, this.x, this.y, this.width, this.height)
    }
}

export class HUD
{
    constructor(game)
    {
        this.game = game
        this.x = 0
        this.y = 0
        this.width = this.game.width
        this.height = this.game.height
        this.image1 = document.getElementById('hud')
        this.image2 = document.getElementById('hud1')
        this.component1 = new HudComponent(this.image1, 20, 20, 64, 64)
        this.component2 = new HudComponent(this.image2, 200, 20, 64, 64)
        this.components = [this.component1, this.component2]
    }

    update()
    {

    }

    draw(context)
    {
        this.components.forEach(component => {
            component.draw(context)
        }) 
        context.fillText("x" + this.game.player.currentEnergy, 80, 80)
        context.fillText("x" + this.game.player.score, 270, 80)
    }
}