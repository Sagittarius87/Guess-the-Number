let game = {
    running: true,
    ctx: null,
    sprites: {},
    sounds: {},
    init() {
        this.ctx = document.getElementById('idcanvas').getContext('2d')
        console.log(this.ctx)
    },
    start() {
        console.log('start game')
    }
}

game.start()
game.init()