
const gameboard = require('./gameboard')
const ship = require('./ship')

test ('gameboard fills properly', () => {
    let player1 = gameboard()
    expect(
        player1.boardInfo.length
    ).toBe(100)
})

test ('gameboard places ship correctly', () => {
    let ship1 = ship(1, 3, 0, false)
    let player1 = gameboard()
    player1.placeShip(ship1)
    expect(
        player1.boardInfo[2].ship
    ).toBe(ship1)
})

test ('gameboard places vertical ship correctly', () => {
    let ship1 = ship(1, 3, 0, true)
    let player1 = gameboard()
    player1.placeShip(ship1)
    expect(
        player1.boardInfo[10].ship
    ).toBe(ship1)
})

test ('gameboard records where shots have been made', () => {
    let player1 = gameboard()
    player1.markHit(20)
    expect(
        player1.boardInfo[20].beenHit
    ).toBe(true)
})

test ('gameboard recognizes all ships are sunk', () => {
    let player1 = gameboard()
    let ship1 = ship (1, 1, 0)
    player1.placeShip(ship1)
    ship1.hit(0)
    expect(
        player1.allSunk()
    ).toBeTruthy()
})

test ('gameboard recognizes all ships are NOT sunk', () => {
    let player1 = gameboard()
    let ship1 = ship (1, 1, 0)
    let ship2 = ship (2, 3, 4)

    player1.placeShip(ship1)
    player1.placeShip(ship2)

    ship1.hit(0)

    expect(
        player1.allSunk()
    ).toBe(false)
})

test ('gameboard tells ship it has been hit', () => {
    let player1 = gameboard()
    let ship1 = ship(1, 3, 0, true)
    player1.placeShip(ship1)
    player1.markHit(20)
    expect(
        ship1.hitLocations[2].hit
    ).toBeTruthy()
})

test('gameboard checks for collision when placing ships', () => {
    let player1 = gameboard()
    let ship1 = ship(1, 3, 0, true)
    let ship2 = ship (2, 2, 20)
    player1.placeShip(ship1)
    expect (
        player1.checkCollision(ship2.getCoords())
    ).toBe(true)
})

test ('gameboard recognizes when ship is going off the bottom of the board', () => {
    let player1 = gameboard()
    let ship1 = ship(1, 5, 98, true)
    expect (
        player1.checkCollision(ship1.getCoords())
    ).toBe(true)
})

test ('gameboard recognizes when ships is placed overlapping rows', () => {
    let player1 = gameboard()
    let ship1 = ship(1, 5, 9)
    expect (
        player1.checkCollision(ship1.getCoords())
    ).toBe(true)
})

test ('gameboard recognizes when there is NOT collision', () => {
    let player1 = gameboard()
    let ship1 = ship(1, 3, 0, true)
    player1.placeShip(ship1)
    let ship2 = ship(2, 2, 36, false)
    expect (
        player1.checkCollision(ship2.getCoords())
    ).toBe(false)
})