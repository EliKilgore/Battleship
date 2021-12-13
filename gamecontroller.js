import player from './player'
import gameboard from './gameboard'
import ship from './ship'

const gameController = () => {
    //const user = player()
    //const computer = player()
    //let players = [user, computer]
    //let round = 1
    //let isOver = false

    const placePieces = (player) => {
        let pieces = [
            {id: 'carrier', length: 5 },
            {id: 'battleship', length: 4 },
            {id: 'cruiser', length: 3 },
            {id: 'submarine', length: 3 },
            {id: 'destroyer', length: 2 }
        ]
    
        for (let i = 0; i < pieces.length; i++) {
            let startingCoord = Math.floor(Math.random() * 100)
            let isVertical = Math.random() < 0.5 ? true : false
            let newShip = ship (pieces[i].id, pieces[i].length, startingCoord, isVertical)
            if (player.gameBoard.checkCollision(newShip.getCoords)) {
                while (player.gameBoard.checkCollision(newShip.getCoords)==true) {
                    newShip = ship (pieces[i].id, pieces[i].length, Math.floor(Math.random() * 100), isVertical)
                }
            }            
            player.gameBoard.placeShip(newShip)
        }   
    }

    return { placePieces }
}

module.exports = gameController

