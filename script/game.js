let game = {
    newGame: false,
    minNumber: 0,
    maxNumber: 10,
    enteredNumber: null,
    arrayEnteredNumbers: [],
    hiddenNumber: null,
    messages: null,
    numberOfAttempts: null,
    sprites: {
        imageSmile3: null,
        imageSmile4: null,
        imageSmile5: null
    },
    sounds: {
        soundClick: null
    },
    gameUI: {
        mainImage: null,
        buttonNewGame: null,
        newGameUI: null,
        labelEnteredNumber: null,
        labelMessage: null,
        buttonAgain: null,
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
    //метод инициализации, в котором в осноном происходит передача значений свойств обьекта dom нужному свойству из обьекта game
    init() {
        this.gameUI.mainImage = document.getElementById('mainImage2')
        this.gameUI.buttonNewGame = document.getElementById('buttonNewGame')
        this.gameUI.newGameUI = document.getElementById('newGameUI')
        this.gameUI.labelEnteredNumber = document.getElementById('labelEnteredNumber')
        this.gameUI.labelMessage = document.getElementById('labelMessage')
        this.gameUI.buttonAgain = document.getElementById('buttonAgain')
        this.gameUI.buttonZero = document.getElementById('buttonZero')
        this.gameUI.buttonOne = document.getElementById('buttonOne')
        this.gameUI.buttonTwo = document.getElementById('buttonTwo')
        this.gameUI.buttonThree = document.getElementById('buttonThree')
        this.gameUI.buttonFour = document.getElementById('buttonFour')
        this.gameUI.buttonFive = document.getElementById('buttonFive')
        this.gameUI.buttonSix = document.getElementById('buttonSix')
        this.gameUI.buttonSeven = document.getElementById('buttonSeven')
        this.gameUI.buttonEight = document.getElementById('buttonEight')
        this.gameUI.buttonNine = document.getElementById('buttonNine')
        this.gameUI.buttonBackspace = document.getElementById('buttonBackspace')
        this.gameUI.buttonCheck = document.getElementById('buttonCheck')
    },
    //метод обработки событий
    setEvants() {
        this.gameUI.buttonNewGame.onclick = () => {
            this.gameUI.buttonNewGame.style.display = 'none'
            this.gameUI.buttonAgain.style.display = 'none'
            this.gameUI.newGameUI.style.visibility = 'visible'
            this.hiddenNumber = generatingRandomNumber(this.minNumber, this.maxNumber)
            this.numberOfAttempts = 3
            settingImageSmile('src', '/img/mainImage2.png')
            messageOutput(`Загадано число от ${this.minNumber} до ${this.maxNumber}, отгадайте его`)
            this.sounds.soundClick.play()
            this.newGame = true
            console.log('----------------')
            console.log('hiddenNumber ' + this.hiddenNumber)
            console.log('numberOfAttempts ' + this.numberOfAttempts)
            console.log('buttonNewGame')
            console.log('----------------')    
        }

        this.gameUI.buttonAgain.onclick = () => {
            this.gameUI.buttonAgain.style.display = 'none'
            this.arrayEnteredNumbers = []
            this.hiddenNumber = generatingRandomNumber(this.minNumber, this.maxNumber)
            this.numberOfAttempts = 3
            settingImageSmile('src', '/img/mainImage2.png')
            messageOutput(`Загадано число от ${this.minNumber} до ${this.maxNumber}, отгадайте его`)
            this.sounds.soundClick.play()
            this.newGame = true
            buttonAgainVisibility()
            console.log('----------------')
            console.log('hiddenNumber ' + this.hiddenNumber)
            console.log('numberOfAttempts ' + this.numberOfAttempts)
            console.log('buttonAgain')
            console.log('----------------')
        }

        this.gameUI.buttonZero.onclick = () => {
            enteringNumber('0')
        }

        this.gameUI.buttonOne.onclick = () => {
            enteringNumber('1')
        }

        this.gameUI.buttonTwo.onclick = () => {
            enteringNumber('2')
        }

        this.gameUI.buttonThree.onclick = () => {
            enteringNumber('3')
        }

        this.gameUI.buttonFour.onclick = () => {
            enteringNumber('4')
        }

        this.gameUI.buttonFive.onclick = () => {
            enteringNumber('5')
        }

        this.gameUI.buttonSix.onclick = () => {
            enteringNumber('6')
        }

        this.gameUI.buttonSeven.onclick = () => {
            enteringNumber('7')
        }

        this.gameUI.buttonEight.onclick = () => {
            enteringNumber('8')
        }

        this.gameUI.buttonNine.onclick = () => {
            enteringNumber('9')
        }

        this.gameUI.buttonBackspace.onclick = () => {
            if (this.arrayEnteredNumbers != null) {
                this.arrayEnteredNumbers.pop()
                this.enteredNumber = this.arrayEnteredNumbers.join('')
                this.gameUI.labelEnteredNumber.innerHTML = this.enteredNumber 
                this.sounds.soundClick.play()
            }
            console.log('----------------')
            console.log('enteredNumber ' + this.enteredNumber)
            console.log('buttonBackspace')
            console.log(this.arrayEnteredNumbers)
            console.log('----------------')
        }

        this.gameUI.buttonCheck.onclick = () => {
            if (this.enteredNumber != null && this.arrayEnteredNumbers.length > 0) {
                if (this.numberOfAttempts > 0) {
                    if (this.enteredNumber == this.hiddenNumber) {
                        settingImageSmile('src', this.sprites.imageSmile3)
                        messageOutput(`Вы угодали! Было загаданно число ${this.hiddenNumber}`)
                        this.sounds.soundClick.play()
                        this.newGame = false
                        buttonAgainVisibility()
                    } else if (this.enteredNumber > this.hiddenNumber) {
                        this.numberOfAttempts--
                        settingImageSmile('src', this.sprites.imageSmile4)
                        messageOutput(`Увы, введенное число больше! Осталось попыток: ${this.numberOfAttempts}`)
                        this.sounds.soundClick.play()
                        console.log('----------------')
                        console.log('numberOfAttempts ' + this.numberOfAttempts)
                        console.log('----------------')
                    } else if (this.enteredNumber < this.hiddenNumber) {
                        this.numberOfAttempts--
                        settingImageSmile('src', this.sprites.imageSmile4)
                        messageOutput(`Увы, введенное число меньше! Осталось попыток: ${this.numberOfAttempts}`)
                        this.sounds.soundClick.play()
                        console.log('----------------')
                        console.log('numberOfAttempts ' + this.numberOfAttempts)
                        console.log('----------------')
                    }
                } else {
                    settingImageSmile('src', this.sprites.imageSmile5)
                    messageOutput(`Попытки закончились, игра завершена`)
                    this.sounds.soundClick.play()
                    this.newGame = false    
                    buttonAgainVisibility()
                    console.log('----------------')
                    console.log('numberOfAttempts ' + this.numberOfAttempts)
                    console.log('----------------')                    
                }
            } else {
                messageOutput(`Вы не ввели число. Введите его!`)
            }
        }

        //функция, отвечающая за ввод числа
        const enteringNumber = (number) => {
            let arrayLength = 0
            if (number == '0') {
                arrayLength = 1     
            } else {
                arrayLength = 2   
            }
            if (this.arrayEnteredNumbers.length < arrayLength) {
                if (this.arrayEnteredNumbers[0] == '0') {
                            this.arrayEnteredNumbers = []
                        }
                this.arrayEnteredNumbers.push(number)
                }
            if (number == '0' && this.arrayEnteredNumbers[0] > 0) {
                while (this.arrayEnteredNumbers.length < 2) {
                    this.arrayEnteredNumbers.push(number)                    
                }
            }
            this.enteredNumber = Number(this.arrayEnteredNumbers.join(''))
            this.gameUI.labelEnteredNumber.innerHTML = this.enteredNumber
            this.sounds.soundClick.play()    
            console.log('----------------')
            console.log(number)
            console.log(this.arrayEnteredNumbers)
            console.log('enteredNumber ' + this.enteredNumber)
            console.log('----------------')
        }
    
    //функция, отвечающая за вывод сообщения    
    const messageOutput = (message) => {
        this.gameUI.labelMessage.innerHTML = message
        }
    
    //функция, отвечающая за скрытие или отображение кнопок в случае нажатия на кнопку buttonAgain    
    const buttonAgainVisibility = () => {
        if (this.newGame == true) {
            this.gameUI.buttonZero.style.visibility = 'visible'
            this.gameUI.buttonOne.style.visibility = 'visible'
            this.gameUI.buttonTwo.style.visibility = 'visible'
            this.gameUI.buttonThree.style.visibility = 'visible'
            this.gameUI.buttonFour.style.visibility = 'visible'
            this.gameUI.buttonFive.style.visibility = 'visible'
            this.gameUI.buttonSix.style.visibility = 'visible'
            this.gameUI.buttonSeven.style.visibility = 'visible'
            this.gameUI.buttonEight.style.visibility = 'visible'
            this.gameUI.buttonNine.style.visibility = 'visible'
            this.gameUI.buttonBackspace.style.visibility = 'visible'
            this.gameUI.buttonCheck.style.visibility = 'visible' 
        } else {
            this.gameUI.labelEnteredNumber.innerHTML = ''
            this.gameUI.buttonAgain.style.display = 'block'
            this.gameUI.buttonZero.style.visibility = 'hidden'
            this.gameUI.buttonOne.style.visibility = 'hidden'
            this.gameUI.buttonTwo.style.visibility = 'hidden'
            this.gameUI.buttonThree.style.visibility = 'hidden'
            this.gameUI.buttonFour.style.visibility = 'hidden'
            this.gameUI.buttonFive.style.visibility = 'hidden'
            this.gameUI.buttonSix.style.visibility = 'hidden'
            this.gameUI.buttonSeven.style.visibility = 'hidden'
            this.gameUI.buttonEight.style.visibility = 'hidden'
            this.gameUI.buttonNine.style.visibility = 'hidden'
            this.gameUI.buttonBackspace.style.visibility = 'hidden'
            this.gameUI.buttonCheck.style.visibility = 'hidden'
        }        
    }

    //функция, отвечающая за смену картинки с смайликом
    const settingImageSmile = (attributeName, attributeValue) => {
        this.gameUI.mainImage.setAttribute(attributeName, attributeValue)
    }

    //функция, генерирующая произвольное целое число
    const generatingRandomNumber = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    },
    //метод, отвечающий за предзагрузку изображений и звуков
    preload() {
        this.sprites.imageSmile3 = '/img/imageSmile3.png'
        this.sprites.imageSmile4 = '/img/imageSmile4.png'
        this.sprites.imageSmile5 = '/img/imageSmile5.png'
        this.sounds.soundClick = new Audio('/sounds/bump.mp3')
    },
    //метод, запускающий игру. Здесь происходит инициализация, предзагрузка и обработка событий
    start() {
        this.init()
        this.preload()
        this.setEvants()
    }
}

//запуск игры
game.start()