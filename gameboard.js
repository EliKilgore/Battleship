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
        let coords = ship.getCoords()
        ships.push(ship)
        for (let i=0; i < coords.length; i++) {
            boardInfo[coords[i]].ship = ship
        }
        
    }

    const checkCollision = (coords) => {
        let collision = null
        for (let i = 0; i < coords.length; i++) {
            if (coords[i] > boardInfo.length || boardInfo[coords[i]].ship || (coords[i]%10 < coords[0]%10)) {
                collision = true
                break
            } else {
                collision = false
            }
        }
        return collision
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

    const getFilledSlots = () => {
        let filledSlots = 0
        for (let i=0; i < boardInfo.length; i++) {
            if (boardInfo[i].ship) {
                filledSlots += 1
            }
        }
        return filledSlots
    }
    return { boardInfo, ships, fillBoard, placeShip, checkCollision, markHit, allSunk, getFilledSlots }
}

module.exports = gameboard