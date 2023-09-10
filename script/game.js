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
        console.log(this.logo.src)        
    },
    start() {
        console.log('start game')
    }
}

game.start()
game.init()
game.preload()