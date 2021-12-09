const gameboardFactory = require('./gameboard')
const shipFactory = require('./ship')

test ('gameboard fills properly', () => {
    let player1 = gameboardFactory()
    expect(
        player1.boardInfo.board.length
    ).toBe(100)
})

test ('gameboard places ship correctly', () => {
    let ship = shipFactory(1, 3, 0, false)
    let player1 = gameboardFactory()
    player1.placeShip(ship)
    expect(
        player1.boardInfo.board[2].ship
    ).toBe(ship)
})

test ('gameboard places vertical ship correctly', () => {
    let ship = shipFactory(1, 3, 0, true)
    let player1 = gameboardFactory()
    player1.placeShip(ship)
    expect(
        player1.boardInfo.board[20].ship
    ).toBe(ship)
})

test ('gameboard records where shots have been made', () => {
    let player1 = gameboardFactory()
    player1.markHit(20)
    expect(
        player1.boardInfo.board[20].beenHit
    ).toBe(true)
})

test ('gameboard recognizes all ships are sunk', () => {
    let player1 = gameboardFactory()
    let ship = shipFactory (1, 1, 0)
    player1.placeShip(ship)
    ship.hit(0)
    expect(
        player1.allSunk()
    ).toBeTruthy()
})

test ('gameboard recognizes all ships are NOT sunk', () => {
    let player1 = gameboardFactory()
    let ship1 = shipFactory (1, 1, 0)
    let ship2 = shipFactory (2, 3, 4)

    player1.placeShip(ship1)
    player1.placeShip(ship2)

    ship1.hit(0)

    expect(
        player1.allSunk()
    ).toBe(false)
})

test ('gameboard tells ship it has been hit', () => {
    let player1 = gameboardFactory()
    let ship = shipFactory (1, 1, 0)
    player1.placeShip(ship)
    player1.markHit(0)
    expect(
        ship.isSunk()
    ).toBeTruthy()
})