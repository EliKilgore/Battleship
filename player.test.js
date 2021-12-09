const player = require('./player')
const gameboardFactory = require('./gameboard')
const shipFactory = require('./ship')

test ('Player has gameboard', () => {
    let eli = player()
    expect(
        eli.playerInfo.gameBoard.boardInfo.board.length
    ).toBe(100)
})