const player = require('./player')
const gameboard = require('./gameboard')
const ship = require('./ship')

test ('Player has gameboard', () => {
    let eli = player()
    expect(
        eli.gameBoard.boardInfo.length
    ).toBe(100)
})

test ('computer makes random shot', () => {
    let eli = player()
    eli.getRandomMove()
    expect(
        eli.shots.length
    ).toBe(1)
})