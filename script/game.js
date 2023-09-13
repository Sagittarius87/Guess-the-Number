let game = {
    running: true,
    ctx: null,
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
        buttonCheck: null
    },
    sounds: {
        soundClick: null
    },
    init() {
        this.ctx = document.getElementById('idcanvas').getContext('2d')
        console.log('canvas start')
    },
    preload() {
        this.logo = new Image()
        this.logo.src = '/img/Угодай число.png'
        this.logo.addEventListener('load', () => {
            window.requestAnimationFrame(() => {
                this.ctx.drawImage(this.logo, 640 - (529 / 2), 39)
                console.log('logo loaded and drawn')
            })
        })

        this.mainImage2 = new Image()
        this.mainImage2.src = '/img/Ресурс 2 1.png'
        this.mainImage2.addEventListener('load', () => {
            window.requestAnimationFrame(() => {
                this.ctx.drawImage(this.mainImage2, 651 - (191 / 2), 169)
                console.log('mainImage2 loaded and drawn')
            })
        })
             
    },
    start() {
        console.log('start game')
    }
}

game.start()
game.init()
game.preload()