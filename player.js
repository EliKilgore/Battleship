import gameboardFactory from './gameboard'
import shipFactory from './ship'

const player = () => {
    const playerInfo = {
        gameBoard: gameboardFactory(),
        shots: []
    }

    const getRandomMove = () => {
        let randMove = Math.floor(Math.random() * num)
        while (shots.includes(randMove)){
            randMove = Math.floor(Math.random() * num)
        }
        shots.push(randMove)
        return randMove
    }

    return { playerInfo, getRandomMove }
}

module.exports = player