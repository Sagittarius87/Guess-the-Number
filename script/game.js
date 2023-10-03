let game = {
    ctx: null,
    with: 1280,
    height: 1080,
    enteredNumber: null,
    hiddenNumber: null,
    messages: ['0'],
    sprites: {
        imageSmile1: null,
        imageSmile2: null,
        imageSmile3: null,
        imageSmile4: null,
        imageSmile5: null
    },
    sounds: {
        soundClick: null
    },
    gameUI: {
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
    init() {
        this.gameUI.buttonNewGame = document.getElementById('buttonNewGame')
        console.log(this.gameUI.buttonNewGame)
        this.gameUI.labelEnteredNumber = document.getElementById('labelEnteredNumber')
        console.log(this.gameUI.labelEnteredNumber)
        this.gameUI.labelMessage = document.getElementById('labelMessage')
        console.log(this.gameUI.labelMessage)
        this.gameUI.buttonZero = document.getElementById('buttonZero')
        console.log(this.gameUI.buttonZero)
        this.gameUI.buttonOne = document.getElementById('buttonOne')
        console.log(this.gameUI.buttonOne)
        this.gameUI.buttonTwo = document.getElementById('buttonTwo')
        console.log(this.gameUI.buttonTwo)
        this.gameUI.buttonThree = document.getElementById('buttonThree')
        console.log(this.gameUI.buttonThree)
        this.gameUI.buttonFour = document.getElementById('buttonFour')
        console.log(this.gameUI.buttonFour)
        this.gameUI.buttonFive = document.getElementById('buttonFive')
        console.log(this.gameUI.buttonFive)
        this.gameUI.buttonSix = document.getElementById('buttonSix')
        console.log(this.gameUI.buttonSix)
        this.gameUI.buttonSeven = document.getElementById('buttonSeven')
        console.log(this.gameUI.buttonSeven)
        this.gameUI.buttonEight = document.getElementById('buttonEight')
        console.log(this.gameUI.buttonEight)
        this.gameUI.buttonNine = document.getElementById('buttonNine')
        console.log(this.gameUI.buttonNine)
        this.gameUI.buttonBackspace = document.getElementById('buttonBackspace')
        console.log(this.gameUI.buttonBackspace)
        this.gameUI.buttonCheck = document.getElementById('buttonCheck')
        console.log(this.gameUI.buttonCheck)
    },
    setEvants() {
        this.gameUI.buttonNewGame.onclick = () => {
            console.log('click')    
        }
    },
    preload() {},
    update() {
        
    },
    render() {},
    start() {}
}

game.init()
game.setEvants()

// let game = {
//     running: true,
//     ctx: null,
//     width: 1280,
//     height: 1080,
//     enteredNumber: null,
//     hiddenNumber: null,
//     messages: ['0'],
//     sprites: {
//         logo: null,
//         mainImage1: null,
//         mainImage2: null,
//         mainImage3: null,
//         buttonNewGame: null,
//         labelEnteredNumber: null,
//         labelMessage: null,
//         buttonZero: null,
//         buttonOne: null,
//         buttonTwo: null,
//         buttonThree: null,
//         buttonFour: null,
//         buttonFive: null,
//         buttonSix: null,
//         buttonSeven: null,
//         buttonEight: null,
//         buttonNine: null,
//         buttonBackspace: null,
//         buttonCheck: null,
//         imageSmile1: null,
//         imageSmile2: null,
//         imageSmile3: null,
//         imageSmile4: null,
//         imageSmile5: null
//     },
//     sounds: {
//         soundClick: null
//     },
//     gameUI: {
//         buttonNewGame: {
//             x: 517,
//             y: 490,
//             width: 251,
//             height: 75
//         },
//         eventOfButton(buttonName) {
//             window.addEventListener('mousedown', e => {
//                 console.log(e)
//                 if (e.x - 192 >= buttonName.x && e.x - 192 <= buttonName.x + buttonName.width && e.y >= buttonName.y && e.y <= buttonName.y + buttonName.height) {
//                 //if ((e.x <= buttonName.x + buttonName.width) && (e.y <= buttonName.y + buttonName.height)) {
//                     console.log('click x and y')
//                     console.log(e.x)
//                     console.log(e.y)
//                     console.log(buttonName.x)
//                     console.log(buttonName.y)
//                     console.log(buttonName.width)
//                     console.log(buttonName.height)
//                     console.log(buttonName.x + buttonName.width)
//                     console.log(buttonName.y + buttonName.height)
//                 } else {
//                     console.log('not click x and y')
//                 }
//             })
//         }
//     },
//     init() {
//         this.ctx = document.getElementById('idcanvas').getContext('2d')
//         //this.setEvants()
        
//         console.log('canvas start')
//     },
//     preload(callback) {
//         let loaded = 0
//         let required = Object.keys(this.sprites).length
//         let onResourcesLoad = () => {
//             loaded++
//             if (loaded >= required) {
//                 callback()
//             }
//         }
//         this.preloadSprites(onResourcesLoad)
//         console.log(loaded)
//         console.log(required)   
//         console.log('preload completed')          
//     },
//     preloadSprites(onResourcesLoad) {
//         for (let key in this.sprites) {
//             this.sprites[key] = new Image()
//             this.sprites[key].src = '/img/' + key + '.png'
//             this.sprites[key].addEventListener('load', onResourcesLoad)
//         }
//         console.log('preload all sprites completed')

//         /*
//         this.logo = new Image()
//         this.logo.src = '/img/Угодай число.png'
//         this.logo.addEventListener('load', () => {
//             window.requestAnimationFrame(() => {
//                 this.render()
//                 console.log('logo loaded and drawn')
//             })
//         })

//         this.mainImage2 = new Image()
//         this.mainImage2.src = '/img/Ресурс 2 1.png'
//         this.mainImage2.addEventListener('load', () => {
//             window.requestAnimationFrame(() => {
//                 this.render()
//                 console.log('mainImage2 loaded and drawn')
//             })
//         })
//         */
//     },
//     preloadSounds() {
//         console.log('preload all sounds completed')
//     },
//     update() {
//         //this.ctx.onmousedown = function(e) {
//         //    console.log('button new game click')
//         //} 
//                 //console.log('update completed')
//         this.gameUI.eventOfButton(this.gameUI.buttonNewGame)
               
//     },
//     run() {
//         if (this.running) {
//             window.requestAnimationFrame(() => {
//                 this.update()
//                 this.render()
//                 this.run()    
//             })
            
//         }
//         //console.log('run completed')
//     },
//     render() {
//         this.ctx.clearRect(0, 0, this.width, this.height)
//         this.ctx.drawImage(this.sprites.logo, 376, 39)
//         this.ctx.drawImage(this.sprites.mainImage2, 547, 169)
//         this.ctx.drawImage(this.sprites.mainImage1, 46, 136)
//         this.ctx.drawImage(this.sprites.mainImage3, 777, 136)
//         this.ctx.drawImage(this.sprites.buttonNewGame, 517, 490)
        
        
        
        
//         //console.log('render completed')
//     },
//     start() {
//         this.init()
//         this.preload(() => {
//             this.run()
//         })
//         console.log('game started')
        
//     },
//     setEvants() {
//         window.addEventListener('mousedown', (e)=> {
//             //if (e.which == 1) {
//             //    console.log(e)
//             //}
            
//             console.log(e)
//             //console.log(this.ctx.sprites.buttonNewGame.x)
//         }) 
//     }

// }
// /*
// game.gameUI = {
//     buttonNewGame: {
//         x: 517,
//         y: 490,
//         width: 251,
//         height: 75
//     },
    
//     eventOfButton(buttonName) {
//         window.addEventListener('mousedown', e => {
//             console.log(e)
//             if (e.x > this.buttonName.x + this.buttonName.width) {
//                 console.log('click x')
//                 console.log(e.x)
//                 console.log(this.buttonName.x)
//                 console.log(this.buttonName.width)
//                 console.log(this.buttonName.x + this.buttonName.width)
//             } else {
//                 console.log('not click x')
//             }
//         })
//     }
// }
// */

// window.addEventListener('load', () => {
//     game.start()
// })






