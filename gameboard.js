import shipFactory from "./ship"

const gameboardFactory = () => {
    const boardInfo = {
        board: [],
        ships: []
    }

    const fillBoard = () => {
        for (let i=0; i<100; i++) {
            boardInfo.board.push({ship:false, beenHit: false})
        }
    }

    if (boardInfo.board.length === 0) {
        fillBoard()
    }

    const placeShip = (ship) => {
        boardInfo.ships.push(ship)
        for (let i=0; i < ship.length;i++) {
            let coord = ship.hitLocations[i].coord
            boardInfo.board[coord].ship = ship
        }
    }

    const markHit = (coord) => {
        boardInfo.board[coord].beenHit = true
        if (boardInfo.board[coord].ship) {
            boardInfo.board[coord].ship.hit(coord)
        }
    }

    const allSunk = () => {
        return boardInfo.ships.every(ship => ship.isSunk()===true)
    }

    return { boardInfo, fillBoard, placeShip, markHit, allSunk }
}

module.exports = gameboardFactory