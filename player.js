import gameboard from './gameboard'
import ship from './ship'

const player = () => {
    const gameBoard = gameboard()
    const shots = []

    const getRandomMove = () => {
        let randMove = Math.floor(Math.random() * 100)
        while (shots.includes(randMove)){
            randMove = Math.floor(Math.random() * 100)
        }
        shots.push(randMove)
        return randMove
    }
    
    return { gameBoard, shots, getRandomMove }
}

module.exports = player