import ship from "./ship"

const gameboard = () => {

    const boardInfo = []

    const ships = []

    const fillBoard = () => {
        for (let i=0; i<100; i++) {
            boardInfo.push({ship:false, beenHit: false})
        }
    }

    if (boardInfo.length === 0) {
        fillBoard()
    }

    const placeShip = (ship) => {
        ships.push(ship)
        let coords = ship.getCoords()
        if (checkCollision(coords)) {
            return 'ERROR'
        } else {
            for (let i=0; i < coords.length; i++) {
                boardInfo[coords[i]].ship = ship
            }
        }
    }

    const checkCollision = (coords) => {
        for (let coord in coords) {
            return boardInfo[coord].ship
        }
    }

    const markHit = (coord) => {
        boardInfo[coord].beenHit = true
        if (boardInfo[coord].ship) {
            boardInfo[coord].ship.hit(coord)
        }
    }

    const allSunk = () => {
        return ships.every(ship => ship.isSunk()===true)
    }

    return { boardInfo, ships, fillBoard, placeShip, checkCollision, markHit, allSunk }
}

module.exports = gameboard