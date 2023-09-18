let game = {
    running: true,
    ctx: null,
    width: 1280,
    height: 1080,
    enteredNumber: null,
    hiddenNumber: null,
    messages: ['0'],
    sprites: {
        logo: null,
        mainImage1: null,
        mainImage2: null,
        mainImage3: null,
        buttonNewGame: null,
        labelEnteredNumber: null,
        labelMessage: null,
        buttonZero: null,
        buttonOne: null,
        buttonTwo: null,
        buttonThree: null,
        buttonFour: null,
        buttonFive: null,
        buttonSix: null,
        buttonSeven: null,
        buttonEight: null,
        buttonNine: null,
        buttonBackspace: null,
        buttonCheck: null,
        imageSmile1: null,
        imageSmile2: null,
        imageSmile3: null,
        imageSmile4: null,
        imageSmile5: null
    },
    sounds: {
        soundClick: null
    },
    init() {
        this.ctx = document.getElementById('idcanvas').getContext('2d')
        console.log('canvas start')
    },
    preload(callback) {
        let loaded = 0
        let required = Object.keys(this.sprites).length
        let onResourcesLoad = () => {
            loaded++
            if (loaded >= required) {
                callback()
            }
        }
        this.preloadSprites(onResourcesLoad)
        console.log(loaded)
        console.log(required)   
        console.log('preload completed')          
    },
    preloadSprites(onResourcesLoad) {
        for (let key in this.sprites) {
            this.sprites[key] = new Image()
            this.sprites[key].src = '/img/' + key + '.png'
            this.sprites[key].addEventListener('load', onResourcesLoad)
        }
        console.log('preload all sprites completed')

        /*
        this.logo = new Image()
        this.logo.src = '/img/Угодай число.png'
        this.logo.addEventListener('load', () => {
            window.requestAnimationFrame(() => {
                this.render()
                console.log('logo loaded and drawn')
            })
        })

        this.mainImage2 = new Image()
        this.mainImage2.src = '/img/Ресурс 2 1.png'
        this.mainImage2.addEventListener('load', () => {
            window.requestAnimationFrame(() => {
                this.render()
                console.log('mainImage2 loaded and drawn')
            })
        })
        */
    },
    preloadSounds() {
        console.log('preload all sounds completed')
    },
    update() {
        console.log('update completed')
    },
    run() {
        if (this.running) {
            window.requestAnimationFrame(() => {
                this.update()
                this.render()
                this.run()    
            })
        }
        console.log('run completed')
    },
    render() {
        this.ctx.clearRect(0, 0, this.width, this.height)
        this.ctx.drawImage(this.sprites.logo, 376, 39)
        this.ctx.drawImage(this.sprites.mainImage2, 547, 169)
        this.ctx.drawImage(this.sprites.mainImage1, 46, 136)
        this.ctx.drawImage(this.sprites.mainImage3, 777, 136)
        this.ctx.drawImage(this.sprites.buttonNewGame, 517, 490)
        console.log('render completed')
    },
    start() {
        this.init()
        this.preload(() => {
            this.run()
        })
        console.log('game started')
    }
}

window.addEventListener('load', () => {
    game.start()
})