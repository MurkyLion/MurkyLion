const states = {
    SHUTTING: 0,
    ENABLE: 1,
    IDLE: 2,
    WALK: 3,
    SLASH: 4,
    PUNCH: 5,
    BLOCK: 6,
    THRUST: 7,
    HURT: 8,
    DEAD: 9
}

class State
{
    constructor(state)
    {
        this.state = state
    }
}

export class Enable extends State 
{
    constructor(player)
    {
        super('ENABLE')
        this.player = player
    }

    enter()
    {
        this.player.frameX = 0
        this.player.frameY = 0
        this.player.maxFrame = 4
        this.player.idleTime = 0
    }

    handleInput(input)
    {

    }    
}

export class Shutting extends State 
{
    constructor(player)
    {
        super('SHUTTING')
        this.player = player
    }

    enter()
    {
        this.player.frameX = 0
        this.player.frameY = 1
        this.player.maxFrame = 4
        this.player.idleTime = 0
    }

    handleInput(input)
    {
        if (input.includes("ArrowLeft") || input.includes("ArrowRight"))
        {
            this.player.setState(states.WALK)
        }
        else if(this.player.currentEnergy === 0)
        {
            this.player.setState(states.DEAD, 0)
        }
    }    
}

export class Idle extends State 
{
    constructor(player)
    {
        super('IDLE')
        this.player = player
    }

    enter()
    {
        this.player.frameX = 0
        this.player.frameY = 2
        this.player.maxFrame = 4
    }

    handleInput(input)
    {
        this.player.idleTime++
        if (input.includes("ArrowLeft") || input.includes("ArrowRight"))
        {
            this.player.setState(states.WALK)
        }
        else if(input.includes("ArrowDown") && this.player.onGround())
        {
            this.player.setState(states.BLOCK)
        }
        else if (input.includes("Enter"))
        {
            this.player.setState(states.SLASH)
        }
        else if (input.includes("w"))
        {
            this.player.setState(states.THRUST)
        }
        else if (input.includes("e"))
        {
            this.player.setState(states.PUNCH)
        }
        else if(this.player.idleTime >= 1000)
        {
            this.player.setState(states.SHUTTING)
        }
        else if(this.player.currentEnergy === 0)
        {
            this.player.setState(states.DEAD)
        }
    }    
}

export class Walk extends State 
{
    constructor(player)
    {
        super('WALK')
        this.player = player
    }

    enter()
    {
        this.player.frameX = 0
        this.player.frameY = 3
        this.player.maxFrame = 7
        this.player.idleTime = 0
    }

    handleInput(input)
    {

        if (input.indexOf('ArrowLeft') === -1 && input.indexOf('ArrowRight') === -1)
        {
            this.player.setState(states.IDLE)
        }
        else if(this.player.currentEnergy === 0)
        {
            this.player.setState(states.DEAD)
        }
    }    
}

export class Slash extends State 
{
    constructor(player)
    {
        super('SLASH')
        this.player = player
    }

    enter()
    {
        this.player.frameX = 0
        this.player.frameY = 4
        this.player.maxFrame = 3
    }

    handleInput(input)
    {
        if (input.indexOf('Enter') === -1)
        {
            this.player.setState(states.IDLE)
        }
        else if(this.player.currentEnergy === 0)
        {
            this.player.setState(states.DEAD)
        }

    }    
}

export class Punch extends State 
{
    constructor(player)
    {
        super('PUNCH')
        this.player = player
    }

    enter()
    {
        this.player.frameX = 0
        this.player.frameY = 5
        this.player.maxFrame = 1
    }

    handleInput(input)
    {
        if (input.indexOf('e') === -1)
        {
            this.player.setState(states.IDLE)
        }
        else if(this.player.currentEnergy === 0)
        {
            this.player.setState(states.DEAD)
        }
    }    
}

export class Block extends State 
{
    constructor(player)
    {
        super('BLOCK')
        this.player = player
    }

    enter()
    {
        this.player.frameX = 0
        this.player.frameY = 6
        this.player.maxFrame = 1
    }

    handleInput(input)
    {
        this.player.frameX += 1
        if (input.indexOf("ArrowDown") === -1)
        {
            this.player.setState(states.IDLE)
        }
        else if(this.player.currentEnergy === 0)
        {
            this.player.setState(states.DEAD)
        }
    }    
}

export class Thrust extends State 
{
    constructor(player)
    {
        super('THRUST')
        this.player = player
    }

    enter()
    {
        this.player.frameX = 0
        this.player.frameY = 7
        this.player.maxFrame = 1
    }

    handleInput(input)
    {
        if (input.indexOf("w") === -1)
        {
            this.player.setState(states.IDLE)
        }
        else if(this.player.currentEnergy === 0)
        {
            this.player.setState(states.DEAD)
        }
    }    
}

export class Hurt extends State 
{
    constructor(player)
    {
        super('HURT')
        this.player = player
    }

    enter()
    {
        this.player.frameX = 0
        this.player.frameY = 8
        this.player.maxFrame = 2
    }

    handleInput(input)
    {
        if(this.player.currentEnergy === 0)
        {
            this.player.setState(states.DEAD)
        }
    }    
}

export class Dead extends State 
{
    constructor(player)
    {
        super('DEAD')
        this.player = player
    }

    enter()
    {
        this.player.frameX = 0
        this.player.frameY = 9
        this.player.maxFrame = 3
    }

    handleInput(input)
    {
        if (this.player.frameX >= 3) this.player.frameX = 3
    }    
}