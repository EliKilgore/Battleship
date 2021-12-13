const gameController = require('./gamecontroller')
const player = require('./player')
const gameboard = require('./gameboard')
const ship = require('./ship')
/*
test ('placePieces will generate starting locations for five ships', () => {
    const newGame = gameController()
    const user = player ()
    newGame.placePieces(user)
    expect(user.gameBoard.ships.length).toBe(5)
})

test ('ships do not overlap', () => {
    const newGame = gameController()
    const user = player ()
    newGame.placePieces(user)
    expect(user.gameBoard.getFilledSlots()).toBe(17)
})

*/