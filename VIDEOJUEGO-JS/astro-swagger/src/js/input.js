export class InputHandler
{
    constructor()
    {   
        this.keys = []
        
        window.addEventListener('keydown', e => {
            if ((   e.key === 'ArrowDown' || 
                    e.key === 'ArrowUp' || 
                    e.key === 'ArrowLeft' || 
                    e.key === 'ArrowRight' ||
                    e.key === 'Enter' ||
                    e.key === 'w' ||
                    e.key === 'e') 
                    && this.keys.indexOf(e.key) === -1)
            {
                this.keys.push(e.key)
            }
            console.log(e, this.keys)
        })
        
        window.addEventListener('keyup', e => {
            if ((   e.key === 'ArrowDown' || 
                    e.key === 'ArrowUp' || 
                    e.key === 'ArrowLeft' || 
                    e.key === 'ArrowRight' ||
                    e.key === 'Enter' ||
                    e.key === 'w' ||
                    e.key === 'e'
                ))
            {
                this.keys.splice(e.key, 1)
            }
            console.log(e, this.keys)
        })
    }
}